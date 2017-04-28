import { Point } from "./point";
import { Car } from "./car";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";


export class Road {

    // private _borders: Point[] = [];

    private _cars: Car[] = [];
    private _movedSubject: Subject<string> = new Subject<string>();


    constructor() {
        setInterval(() => {
            this.move();
        }, 1000 / 60);
    }

    private move(): void {
        var newCars = this._cars.map(function (car) {
            if (car.basePoint.y === Point.MAX_Y) {
                return null;
            }
            return new Car(new Point(car.basePoint.x, car.basePoint.y + 1));            
        })
        .filter(function (car: Car) {
            return car !== null
        });

        this._cars = newCars;

        var canCarBeAdded = true;
        for (var x = 0; x <= Point.MAX_X; x++) {
            for (var y = 0; y <= Math.min(10, Point.MAX_Y); y++) {
                var point = new Point(x, y);
                if (this.isCarInPoint(point)) {
                    canCarBeAdded = false;
                }
            }
        }

        if (canCarBeAdded) {
            var willCarBeAdded = Math.random() < 0.1;
            if (willCarBeAdded) {
                var x = Math.min(Math.floor(Math.random() * (Point.MAX_X + 1)), Point.MAX_X);
                var newCar = new Car(new Point(x, 0));
                this._cars.push(newCar);
            }
        }

        this._movedSubject.next("subscribed!");
    }

    public get moved(): Observable<string> {
        return this._movedSubject;
    }

    public get cars(): Car[] {
        return this._cars;
    }

    public isCarInPoint(p: Point): boolean {
        for (let car of this._cars) {
            if (car.isInPoint(p)) {
                return true;
            }
        }
        return false;
    }
}
