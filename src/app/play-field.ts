export class PlayField {


    private _field:any[][];

    constructor() {
        this._field = new Array<any[]>();
        for(let i = 0; i < 10;i++){
            for (let j= 0; j < 10; j++) {
                this._field[i][j] = true;
            }
        }     
    }

}
