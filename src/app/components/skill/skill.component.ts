import { SkillData } from './../../models/skill-data.model';
import { Component, EventEmitter, Input, Output, OnInit, ViewChild, ElementRef, Directive, AfterViewInit} from '@angular/core';
import { Levels } from 'src/app/constants/language-level.enum';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})

export class SkillComponent implements AfterViewInit{
  @Input() public skillData!: SkillData;
  public levelsEnum = Levels;

  ngAfterViewInit(): void {
    this.activateLanguage()
  }

  public activateLanguage(){
    let languages = document.getElementsByClassName('languages')
    for(let i = 0; i < languages.length; i++){
      let steps = languages[i].getElementsByClassName('steps')[0]
      let levels = steps.getElementsByClassName('step');
      for(let j = 0; j< this.skillData.language[i].level; j++){
        levels[j].classList.add('is-active')
      }
    }
  }
}


