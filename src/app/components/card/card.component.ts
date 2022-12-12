import { Component, Input } from '@angular/core';
import { CardData } from 'src/app/models/card-data.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() public DataCard!: CardData
}
