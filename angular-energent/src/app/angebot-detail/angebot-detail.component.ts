import { Component, OnInit, Input } from '@angular/core';
import { Produkt } from '../Produkt';

@Component({
  selector: 'app-angebot-detail',
  templateUrl: './angebot-detail.component.html',
  styleUrls: ['./angebot-detail.component.css']
})
export class AngebotDetailComponent implements OnInit {

  constructor() { }

  @Input() produkt: Produkt;

  ngOnInit(): void {
  }

}
