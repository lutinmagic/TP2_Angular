import { Injectable } from '@angular/core';
import {Tache} from "./Tache";
import {TACHES} from "./data-taches";

@Injectable({
  providedIn: 'root'
})
export class TachesService {

  constructor() { }

  getTaches(): Tache[]{
    return TACHES;
  }

}
