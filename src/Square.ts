import { observable } from "mobx";
import Coordinate from "./Coordinate";
import Piece from "./Piece";

export default class Square {
    @observable public coordinate: Coordinate;
    @observable public isSelected?: boolean;
    @observable public isSelectable?: boolean;
    @observable public piece?: Piece;

    constructor(coordinate: Coordinate, isSelected?: boolean, isSelectable?: boolean, piece?: Piece) {
        this.coordinate = coordinate;
        this.isSelected = isSelected;
        this.isSelectable = isSelectable;
        this.piece = piece;
    }
}
