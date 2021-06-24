import {Injectable, OnInit} from '@angular/core';
import {User} from "./user";
import {USERS} from "./data-users";

@Injectable({
  providedIn: 'root'
})
export class UsersService{

  constructor() { }

  getUsers() : User[] {
    return USERS;
  }



}
