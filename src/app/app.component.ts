import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Date();

  appareils = [
    {
      name: 'Machine à Laver',
      status: 'éteint'
    },
    {
      name: 'Ordinateur',
      status: 'allumé'
    },
    {
      name: 'Télévision',
      status: 'éteint'
    },
    {
      name: 'Radio',
      status: 'éteint'
    },
    {
      name: 'Téléphone',
      status: 'allumé'
    }
  ];

  constructor()
  {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onAllumer()
  {
    console.log('Tout est Allumé');
  }
}
