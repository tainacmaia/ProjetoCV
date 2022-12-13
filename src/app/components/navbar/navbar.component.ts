import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardData } from 'src/app/models/card-data.model';
import { Navbar } from 'src/app/models/navbar-data.mode';
import { AppComponent } from 'src/app/app.component'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() public navData!: Navbar;

  @Input() activeCard: any;
  @Output() activeCardChange = new EventEmitter();

  public activateCard(position: number): void {
    let trueValue = Object.keys(this.activeCard)[position]
    for(let i = 0; i < Object.keys(this.activeCard).length; i++){
      let value = Object.keys(this.activeCard)[i];
      if (Object.keys(this.activeCard)[i] == trueValue){
        eval(`this.activeCard.${value}.isActive = true`)
      }
      else {
        eval(`this.activeCard.${value}.isActive = false`)
      }
    }
  }
}
