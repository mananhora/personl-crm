export class Circle {
  constructor(
    public name: string,
    private _id: number,
    private _friends?: string[],
    public parentCircles?: Circle[],
    public childCircles?: Circle[],
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

}
