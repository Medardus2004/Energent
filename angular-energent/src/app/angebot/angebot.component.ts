import { Component, OnInit } from '@angular/core';
import {Produkt} from "../Produkt";
import {AngebotService} from "../angebot.service"
import { MessageService } from '../message.service';

@Component({
  selector: 'app-angebot',
  templateUrl: './angebot.component.html',
  styleUrls: ['./angebot.component.css']
})
export class AngebotComponent implements OnInit {

  produkte: Produkt[];
  selectedProdukt: Produkt;

  getProdukte(): void {
    this.angebotService.getProdukte()
      .subscribe(produkte => this.produkte = produkte);
  }

  onSelect(produkt: Produkt): void {
    this.selectedProdukt = produkt;
    this.messageService.add(`HeroesComponent: Selected hero id=${produkt.id}`);
  }

  constructor(private angebotService: AngebotService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getProdukte();
  }

}
