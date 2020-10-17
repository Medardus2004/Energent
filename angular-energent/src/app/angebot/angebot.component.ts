import { Component, OnInit } from '@angular/core';
import {Produkt} from "../Produkt";
import {Produkte} from "../ProduktListe"
import {AngebotService} from "../angebot.service"


@Component({
  selector: 'app-angebot',
  templateUrl: './angebot.component.html',
  styleUrls: ['./angebot.component.css']
})
export class AngebotComponent implements OnInit {

  produkte = Produkte;
  selectedProdukt: Produkt;

  getProdukte(): void {
    this.produkte = this.angebotService.getProdukte();
  }

  onSelect(produkt: Produkt): void {
    this.selectedProdukt = produkt;
  }

  constructor(private angebotService: AngebotService) { }

  ngOnInit(): void {
    this.getProdukte();
  }

}
