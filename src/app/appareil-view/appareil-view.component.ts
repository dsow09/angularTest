import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../service/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;
  lastUpdate = new Date();

  appareils: any[] | undefined;

  constructor(private appareilService: AppareilService)
  {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit()
  {
    this.appareils = this.appareilService.appareils
  }

  onAllumer()
  {
    this.appareilService.switchOnAll();
    console.log('Tout est Allumé');
  }

  onEteindre()
  {
    this.appareilService.switchOffAll();
    console.log('Tout est éteint');
  }

}
