import { Point } from "./point";

export class Car {

    private LENGTH: number = 5;

    private _basePoint: Point;


    constructor(basePoint: Point) {
        this._basePoint = basePoint;
    }


    public get basePoint(): Point{
        return this._basePoint;
    }

    public isInPoint(p: Point): boolean {
        if (this._basePoint.x !== p.x) {
            return false;
        }
        if (this._basePoint.y > p.y || this._basePoint.y + this.LENGTH < p.y) {
            return false;
        }
        return true;
    }
}
