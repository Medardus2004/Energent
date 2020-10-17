import { Component, OnInit, Input } from '@angular/core';
import { Produkt } from '../Produkt';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AngebotService } from '../angebot.service'

@Component({
  selector: 'app-angebot-detail',
  templateUrl: './angebot-detail.component.html',
  styleUrls: ['./angebot-detail.component.css']
})
export class AngebotDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private angebotService: AngebotService,
    private location: Location
  ) { }

  @Input() produkt: Produkt;



  ngOnInit(): void {
    this.getProdukt();
  }

  getProdukt(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.angebotService.getProdukt(id)
      .subscribe(produkt => this.produkt = produkt);
  }

  goBack(): void {
    this.location.back();
  }
}
