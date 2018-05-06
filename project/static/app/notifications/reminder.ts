
export class Reminder {
  constructor(
    private _frequency?: number,
    private _lastContact?: Date,
  ) { }

  get frequency(): number {
    return this._frequency;
  }
  set frequency (frequency: number) {
    this._frequency = frequency;
  }

  get lastContact(): Date {
    return this._lastContact;
  }
  set lastContact (lastContact: Date) {
    this._lastContact = lastContact;
  }

}
