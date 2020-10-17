import { Injectable } from '@angular/core';
import {Produkt} from "./Produkt";
import {Produkte} from "./ProduktListe";

@Injectable({
  providedIn: 'root'
})
export class AngebotService {

  getProdukte(): Produkt[] {
    return Produkte
  }

  constructor() { }
}
