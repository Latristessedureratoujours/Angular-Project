import { Road } from "app/road";
import { Point } from "app/point";
import "rxjs";
import { Observable } from "rxjs/Observable";

export class Game {
    private _road: Road;
    private _playerCarPoint: Point;
    private _isOver: boolean = false;
    constructor() {
        this._road = new Road();
        this._playerCarPoint = new Point(0, Point.MAX_Y - 5);

        this._road.moved.subscribe(x => {
            for (let point = new Point(this._playerCarPoint.x, this._playerCarPoint.y); point.y < Point.MAX_Y; point = new Point(point.x, point.y + 1)) {
                if (this._road.isCarInPoint(point)) {
                    this._isOver = true;
                    return;
                }
            }
        });
    }

    public get road(): Road {
        return this._road;
    }

    public get playerCarPoint(): Point {
        return this._playerCarPoint;
    }

    public get isOver(): boolean {
        return this._isOver;
    }

    public turnLeft(): void {
        this._playerCarPoint =
            new Point(
                Math.max(0, this._playerCarPoint.x - 1),
                this._playerCarPoint.y
            );
    }

    public turnRight(): void {
        this._playerCarPoint =
            new Point(
                Math.min(Point.MAX_X, this._playerCarPoint.x + 1),
                this._playerCarPoint.y
            );
    }
}
