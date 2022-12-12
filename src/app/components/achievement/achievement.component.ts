import { AchievementData } from './../../models/achievement-data.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css']
})
export class AchievementComponent {
  @Input() public achievementsData!: AchievementData;
}
