import { Component, Input } from '@angular/core';
import { IEquipment } from '../equipment.interface';

@Component({
  selector: 'app-equipment-card',
  templateUrl: './equipment-card.component.html',
  styleUrls: ['./equipment-card.component.scss']
})
export class EquipmentCardComponent {
  @Input() equipment!: IEquipment;

  getBgColor(tag: string) : string {
    let color = '';
    if(tag === 'strength'){
      color = "red";
    }else if(tag === 'conditioning'){
      color = "green";
    }else{
      color = 'pink';
    }
    return color;

  }

}
