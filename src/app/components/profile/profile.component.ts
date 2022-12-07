import { Component, Input } from '@angular/core';
import { ProfileInfoSection } from 'src/app/models/profile-info-section-data.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Input() public dataProfile!: ProfileInfoSection;

}
