export class Circle {
  constructor(
    public name: string,
    public contacts?: string[],
    public parentCircle?: Circle,
  ) { }
}
