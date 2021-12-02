import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  appareilSubject = new Subject<any[]>();

  private appareils = [
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

  emitAppareilSubject() {
    this.appareilSubject.next(this.appareils.slice());
  }

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
    this.emitAppareilSubject();
  }

  switchOffAll()
  {
    for(let appareil of this.appareils)
    {
      appareil.status = 'éteint';
    }
    this.emitAppareilSubject();
  }

  switchOnOne(index: number)
  {
    this.appareils[index].status = 'allumé';
    this.emitAppareilSubject();
  }

  switchOffOne(index: number)
  {
    this.appareils[index].status = 'éteint';
    this.emitAppareilSubject();
  }

  addAppareil(name: string, status: string)
  {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;

    this.appareils.push(appareilObject);
    this.emitAppareilSubject();

  }

  constructor() { }
}
