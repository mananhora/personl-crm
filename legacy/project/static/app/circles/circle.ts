import { Profile } from '../profile/profile';

export class Circle {
  constructor(
    public name: string,
    private _id: number,
    private _friends?: Profile[],
    private _parentCircle?: Circle,
    private _childCircles?: Circle[],
  ) { }

  get id(): number {
    return this._id;
  }

  set id (id: number) {
    this._id = id;
  }

  get friends(): Profile[] {
    return this._friends;
  }
  set friends (friends: Profile[]) {
    this._friends = friends;
  }

  get parentCircle(): Circle {
    return this.parentCircle;
  }
  set parentCircle (parentCircle: Circle) {
    this.parentCircle = parentCircle;
  }

  get childCircles(): Circle[] {
    return this.childCircles;
  }
  set childCircles (childCircles: Circle[]) {
    this.childCircles = childCircles;
  }

}
