import { SkillData } from './../../models/skill-data.model';
import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  @Input() public skillData!: SkillData;
}


