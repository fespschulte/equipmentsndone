import { Component, Input } from '@angular/core';
import { IEquipment } from '../equipment.interface';

@Component({
  selector: 'app-equipment-card',
  templateUrl: './equipment-card.component.html',
  styleUrls: ['./equipment-card.component.scss']
})
export class EquipmentCardComponent {
  @Input() equipment!: IEquipment;
}
