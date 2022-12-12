import { Component, Input } from '@angular/core';
import { Navbar } from 'src/app/models/navbar-data.mode';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() public navData!: Navbar;
}
