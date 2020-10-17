import { Component, OnInit } from '@angular/core';
import {Produkt} from "../Produkt";
import {AngebotService} from "../angebot.service"
import {EnergieService} from "../energie.service";
import {NeueEnergie} from "../neueEnergie";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  produkte: Produkt[] = [];
  neueEnergie: NeueEnergie[];

  constructor(private angebotService: AngebotService, private energieService: EnergieService) { }

  ngOnInit() {
    this.getHeroes();
    this.getEnergien();
  }

  getHeroes(): void {
    this.angebotService.getProdukte()
      .subscribe(produkte => this.produkte = produkte.slice(1, 5));
  }

  getEnergien(): void {
    this.neueEnergie = this.energieService.getEnergien();
  }
}
