import {Component, OnInit} from '@angular/core';
import {User} from "./user";
import {USERS} from "./data-users";
import {UsersService} from "./users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AppTp2';
  Users?: User[];
  UsersService : UsersService;
  tacheToAssigne = null;


  constructor(service: UsersService) {
    this.UsersService = service;
  }

  ngOnInit(): void {
    this.Users = this.UsersService.getUsers();
  }








}
