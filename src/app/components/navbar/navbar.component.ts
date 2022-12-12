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

  // @Output() public cardActive!: AppComponent;

  public skillActive(): void {
    this.activeCard.skills.isActive = true
    this.activeCard.experience.isActive = false
    this.activeCard.achievements.isActive = false
    this.activeCard.education.isActive = false
  }

  public achievementsActive(): void {
    this.activeCard.skills.isActive = false
    this.activeCard.experience.isActive = false
    this.activeCard.achievements.isActive = true
    this.activeCard.education.isActive = false
  }

  public experienceActive(): void {
    this.activeCard.skills.isActive = false
    this.activeCard.experience.isActive = true
    this.activeCard.achievements.isActive = false
    this.activeCard.education.isActive = false
  }

  public educationActive(): void {
    this.activeCard.skills.isActive = false
    this.activeCard.experience.isActive = false
    this.activeCard.achievements.isActive = false
    this.activeCard.education.isActive = true
  }
}
