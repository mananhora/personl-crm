export class Circle {
  constructor(
    public name: string,
    private _id: number,
    private _friends?: string[],
    private _parentCircles?: Circle[],
    private _childCircles?: Circle[],
  ) { }

  get id(): number {
    return this._id;
  }

  set id (id: number) {
    this._id = id;
  }

  get friends(): string[] {
    return this._friends;
  }
  set friends (friends: string[]) {
    this._friends = friends;
  }

  get parentCircles(): Circle[] {
    return this.parentCircles;
  }
  set parentCircles (parentCircles: Circle[]) {
    this.parentCircles = parentCircles;
  }

  get childCircles(): Circle[] {
    return this.childCircles;
  }
  set childCircles (childCircles: Circle[]) {
    this.childCircles = childCircles;
  }

}
