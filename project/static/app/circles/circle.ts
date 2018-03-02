export class Circle {
  constructor(
    public id: string,
    public contacts?: string[],
    public parentCircle?: Circle,
  ) { }
}
