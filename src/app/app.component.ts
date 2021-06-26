import {Component, OnInit} from '@angular/core';
import {User} from "./user";
import {UsersService} from "./users.service";
import {Tache} from "./Tache";
import {TACHES} from "./data-taches";
import {TachesService} from "./taches.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AppTp2';
  Users?: User[];
  Taches?: Tache[];

  TachesService : TachesService
  UsersService : UsersService;

  // infos des différents ngModel
  NomTacheform? : string;
  usersSelected? : string;
  etatSelected? : string;
  numberPrioritySelected? : number;

  fenAjouter: boolean = false;
  tacheToEdit?: Tache = undefined;

  constructor(service: UsersService, service2: TachesService) {
    this.UsersService = service;
    this.TachesService = service2;
  }


  ngOnInit(): void {
    this.Users = this.UsersService.getUsers();
    this.Taches = this.TachesService.getTaches();
  }


  affichePageAjoutTache(){
    this.fenAjouter = true;
    this.tacheToEdit = undefined;
  }
  fermerFenAjoutTache(){
    this.fenAjouter = false;
  }

  openEditFen(tache: Tache){
    this.fenAjouter = false;
    this.tacheToEdit = tache;
  }
  fermeEditFen(){
    this.tacheToEdit = undefined;
  }




  ajouterTache(){
    console.log(this.Taches);
    var tacheToImport = {nom: this.NomTacheform, etat: this.etatSelected, numeroOrdre: this.numberPrioritySelected, attribution: this.usersSelected};
    TACHES.unshift(tacheToImport);
  }

  deleteItem(tache: Tache) {

    this.tacheToEdit = undefined;
    this.fenAjouter = false;

    for(var i=0; i<TACHES.length; i++){
      if(tache.nom == TACHES[i].nom){
        TACHES.splice(i,1);
      }
    }
  }


  getBgColor(tache: Tache) {

    if(tache.etat == 'À faire'){
      return '#ff595e';
    }else if(tache.etat == 'En cours'){
      return '#ffca3a';
    }else{
      return '#8ac926';
    }
  }
}
