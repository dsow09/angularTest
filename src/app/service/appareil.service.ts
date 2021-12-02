import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  appareils = [
    {
      id: 1,
      name: 'Ordinateur',
      status: 'allumé'
    },
    {
      id: 2,
      name: 'Machine à Laver',
      status: 'éteint'
    },
    {
      id: 3,
      name: 'Télévision',
      status: 'éteint'
    },
    {
      id: 4,
      name: 'Radio',
      status: 'éteint'
    },
    {
      id: 5,
      name: 'Téléphone',
      status: 'allumé'
    }
  ];

  getAppareilById(id: number)
  {
    const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id == id;

      }
    );
    return appareil;

  }

  switchOnAll()
  {
    for(let appareil of this.appareils)
    {
      appareil.status = 'allumé';
    }
  }

  switchOffAll()
  {
    for(let appareil of this.appareils)
    {
      appareil.status = 'éteint';
    }
  }

  switchOnOne(index: number)
  {
    this.appareils[index].status = 'allumé';
  }

  switchOffOne(index: number)
  {
    this.appareils[index].status = 'éteint';
  }

  constructor() { }
}
