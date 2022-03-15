import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IEquipment } from '../equipment.interface';

@Component({
   selector: 'app-equipment-list',
   templateUrl: './equipment-list.component.html',
   styleUrls: ['./equipment-list.component.scss']
})

export class EquipmentListComponent {

   equipments: IEquipment[];

   constructor(private http: HttpClient) {
      console.log('list');
      this.equipments = [];
      this.getEquipments();

   }
   
   getEquipments() {
      console.log('calling')
      this.http.get('http://localhost:3000/equipments')
         .subscribe(equipmentsResults => {
            this.equipments = equipmentsResults as IEquipment[]
         });
   }
}
