/**
 * @author Kishor Patil
 * @email kishor.patil0589@gmail.com
 * @create date 2018-07-09 12:53:45
 * @modify date 2018-07-09 12:53:45
 * @desc [description]
*/
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, interval, fromEvent } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class RootDataService {
  constructor() { }

  private _userName = new BehaviorSubject<string>(null);
  userName: Observable<string> = this._userName.asObservable();

  setName (newName) {
    this._userName.next(newName);
  }

}
