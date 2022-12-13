import { SkillData } from './../../models/skill-data.model';
import { Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit{
  @Input() public skillData!: SkillData;

  ngOnInit(): void {
    // let classe = document.getElementsByClassName('pie-wrapper')
    // console.log(classe)
  }
}


