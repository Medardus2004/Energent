import { Component, OnInit } from '@angular/core';
import {Produkt} from "../Produkt";
import {AngebotService} from "../angebot.service";

@Component({
  selector: 'app-angebot',
  templateUrl: './angebot.component.html',
  styleUrls: ['./angebot.component.css']
})
export class AngebotComponent implements OnInit {

  produkte: Produkt[];

  getProdukte(): void {
    this.angebotService.getProdukte()
      .subscribe(produkte => this.produkte = produkte);
  }


  constructor(private angebotService: AngebotService) { }

  ngOnInit(): void {
    this.getProdukte();
  }

}
