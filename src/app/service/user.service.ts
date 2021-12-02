import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    {
      firstName: 'Djibril',
      lastName: 'SOW',
      email: 'djibrilsow@esp.sn',
      drinkPreference: 'Agrume',
      hobbies: [
        'coder',
        'football',
        'café',
        'discussion'
      ]
    }
  ];
  userSubject = new Subject<User[]>();

  emitUsers()
  {
    this.userSubject.next(this.users.slice());
  }

  adduser(user: User)
  {
    this.users.push(user);
    this.emitUsers();
  }

  constructor() { }
}
