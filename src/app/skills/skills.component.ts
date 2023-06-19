import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
  
})
export class SkillsComponent implements OnInit {
  skills:any={
    technologies:[{name:"Angular",percent:60,remark:'good'},{name:"Python",percent:70,remark:'very-good'}, {name:"HTML,CSS,T.S", percent:60,remark:'good'}],
    tools:[{name:"Git",percent:65,remark:'very-good'},{name:"figma",percent:50,remark:'average'},{name:"Firebase",percent:65,remark:'very-good'},],
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);
  }

  ngOnInit(): void {
  }

}
