import { Component, OnInit } from '@angular/core';
import {Produkt} from "../Produkt";
import {AngebotService} from "../angebot.service"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  produkte: Produkt[] = [];

  constructor(private angebotService: AngebotService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.angebotService.getProdukte()
      .subscribe(produkte => this.produkte = produkte.slice(1, 5));
  }
}
