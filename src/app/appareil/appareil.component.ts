import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../service/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string = '';
  @Input() appareilStatus: string = '';
  @Input() indexOfAppareil: number = 1 ;
  @Input() id: number | undefined ;

  constructor(private appareilService:AppareilService) { }

  getStatus()
  {
    return this.appareilStatus;
  }

  getColor()
  {
    if(this.appareilStatus === 'allumé')
    {
      return 'green';
    }
    return 'red';
  }

  ngOnInit(): void {
  }

  onSwitchOn()
  {
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }

  onSwitchOff()
  {
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }

}
