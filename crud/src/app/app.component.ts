import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud';
  constructor(private router: Router, public _title: Title, public translate: TranslateService) {
  }

  ngOnInit(): void {
    this.getTiltleOfRouter();
  }

  getTiltleOfRouter() {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        let string = e.url,
          result = string.replace(/[/]/gi, "| ");
        this._title.setTitle(`Crud ${result}`)
      }
    });
  }
}
