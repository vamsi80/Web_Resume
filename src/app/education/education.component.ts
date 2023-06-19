import { Component } from '@angular/core';
import * as awesom from '@fortawesome/free-solid-svg-icons';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';
import { experiencesFr } from '../api/experiencesFr';
import { experiencesEn } from '../api/experiencesEn';
import { TranslateService } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDumbbell, faRunning } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  experiences: any = experiencesEn;
  planeIcon: any;
  gameIcon: any;
  volleyBallIcon: any;
  gymIcon: any;
  runningIcon: any;

  constructor(private _translationLoaderService: TranslationLoaderService, private _translateService: TranslateService) {
    this._translationLoaderService.loadTranslations(english, french);
    this._translateService.onLangChange.subscribe(() => {
      if (this._translateService.currentLang == "en") {
        this.experiences = experiencesEn;
      }
      else {
        this.experiences = experiencesFr;
      }
    });
  }

  ngOnInit(): void {
    this.planeIcon = awesom.faPlane;
    this.gameIcon = awesom.faGamepad;
    this.volleyBallIcon = awesom.faVolleyballBall;
    this.gymIcon = awesom.faDumbbell;
    this.runningIcon = awesom.faRunning;
  }

  detailOnClick(experience: any) {
    experience.detailIsDisplayed = !experience.detailIsDisplayed;
  }
}
