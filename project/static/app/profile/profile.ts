import { Circle } from '../circles/circle';

export class Profile {
  constructor(
    private _name: string,
    private _email: string,
    private _id: number,
    private _img?: string,
    private _circles?: Circle[],
    private _phone?: string,
    private _location?: string,
    private _reminder?: string, // < an object?
    private _notes?: string[],
  ) { }

  get name(): string {
    return this._name;
  }
  set name (name: string) {
    this._name = name;
  }

  get email(): string {
    return this._email;
  }
  set email (email: string) {
    this._email = email;
  }

  get id(): number {
    return this._id;
  }
  set id (id: number) {
    this._id = id;
  }

  get circles(): Circle[] {
    return this._circles;
  }
  set circles (circles: Circle[]) {
    this._circles = circles;
  }

  get notes(): string[] {
    return this._notes;
  }
  set notes (notes: string[]) {
    this._notes = notes;
  }

}
