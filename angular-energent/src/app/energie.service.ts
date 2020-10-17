import { Injectable } from '@angular/core';
import {NeueEnergie} from "./neueEnergie";
import {NeueEnergien} from "./neueEnergieListe";

@Injectable({
  providedIn: 'root'
})
export class EnergieService {

  constructor() { }

  getEnergien(): NeueEnergie[] {
    return NeueEnergien;
  }
}
