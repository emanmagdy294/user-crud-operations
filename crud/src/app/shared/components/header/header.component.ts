import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LaguageService } from '../../services/language.service';
import { AuthServiceService } from 'src/app/auth/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogin: boolean = false;
  language: any;
  constructor(private _lang: LaguageService, private _AuthService: AuthServiceService,
    public translate: TranslateService) {
    this.language = this._lang.getValue();
    if (_AuthService.currentUser != null) {
      this.isLogin = true;
    }
    else {
      this.isLogin = false;
    }
    _AuthService.currentUser.subscribe(() => {
      if (_AuthService.currentUser.getValue() != null) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    })
  }

  ngOnInit(): void {
    this.getLanguage();
  }

  isLogout() {
    this._AuthService.logout();
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  changeCurrentLang(lang: string) {
    const body = document.getElementsByTagName('body');
    if (lang == "ar") {
      body[0].setAttribute('dir', 'rtl')
      this.translate.use(lang)
      localStorage.setItem('currentLang', 'ar')
      this._lang.setValue('ar')
    } else {
      this.translate.use(lang)
      body[0].setAttribute('dir', 'ltr')
      localStorage.setItem('currentLang', 'en')
      this._lang.setValue('en')
    }
  }

  getLanguage() {
    let lang = localStorage.getItem('currentLang');
    const body = document.getElementsByTagName('body');
    if (lang == "ar") {
      body[0].setAttribute('dir', 'rtl');
      this.translate.use(lang);
      localStorage.setItem('currentLang', 'ar');
    } else {
      body[0].setAttribute('dir', 'ltr')
      localStorage.setItem('currentLang', 'en')
    }
  }

}
