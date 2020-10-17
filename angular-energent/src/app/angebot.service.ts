import { Injectable } from '@angular/core';
import {Produkt} from "./Produkt";
import {Produkte} from "./ProduktListe";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AngebotService {

  getProdukte(): Observable<Produkt[]> {
    return of(Produkte);
  }

  constructor() { }
}
