import { Component, OnInit } from '@angular/core';
import {Produkt} from "../Produkt";
import {Produkte} from "../ProduktListe"

@Component({
  selector: 'app-angebot',
  templateUrl: './angebot.component.html',
  styleUrls: ['./angebot.component.css']
})
export class AngebotComponent implements OnInit {

  produkte = Produkte;
  selectedProdukt: Produkt;

  onSelect(produkt: Produkt): void {
    this.selectedProdukt = produkt;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
