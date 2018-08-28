import { Circle } from '../circles/circle';
import { Reminder } from '../notifications/reminder';

export class Profile {
  constructor(
    // the question mark makes that attribute optional for the constructor
    private _name: string,
    private _email: string,
    private _id: number,
    private _img?: string,
    private _circles?: Circle[],
    private _phone?: string,
    private _location?: string,
    private _reminder?: Reminder,
    private _notes?: string,
    private _job?: string,
    private _isFavorite?: boolean,
  ) {
    this.img = 'assets/images/profile.png';
    this.reminder = new Reminder();
  }

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

  get img(): string {
    return this._img;
  }
  set img (img: string) {
    this._img = img;
  }

  get circles(): Circle[] {
    return this._circles;
  }
  set circles (circles: Circle[]) {
    this._circles = circles;
  }

  get phone(): string {
    return this._phone;
  }
  set phone (phone: string) {
    this._phone = phone;
  }

  get location(): string {
    return this._location;
  }
  set location (location: string) {
    this._location = location;
  }

  get reminder(): Reminder {
    return this._reminder;
  }
  set reminder (reminder: Reminder) {
    this._reminder = reminder;
  }

  get notes(): string {
    return this._notes;
  }
  set notes (notes: string) {
    this._notes = notes;
  }

  get job(): string {
    return this._job;
  }
  set job (job: string) {
    this._job = job;
  }

}
