import { Injectable } from '@angular/core';
import {Produkt} from "./Produkt";
import {Produkte} from "./ProduktListe";
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AngebotService {


  constructor(private messageService: MessageService) { }

  getProdukte(): Observable<Produkt[]>{
    this.messageService.add('AngebotService');
    return of(Produkte);
  }
}
