import { Component } from '@angular/core';
import { IEquipment } from '../equipment.interface';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss']
})

export class EquipmentListComponent {
  equipments: IEquipment[] = [
    {
       "name":"Olympic Barbell",
       "image":"https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_1600,b_rgb:ffffff/catalog/Weightlifting%20Bars%20and%20Plates/Barbells/Mens%2020KG%20Barbells/EU-RA0604-BLBR/EU-RA0604-BLBR-WEB2_hhj4fp.png",
        "tags": "tag a, tag b"
      },
    {
       "name":"Dumbbell",
       "image":"https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_1600,b_rgb:ffffff/catalog/Conditioning/Strength%20Equipment/Dumbbells/IP1100/IP1100-HOVER_moauph.png",
       "tags": "tag a, tag b"

      },
    {
       "name":"Bumper Plate",
       "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFUj-ujbV-xTpLDB5FCLFUiHrQ9O3Z8sAEcQ&usqp=CAU",
       
    },
    {
       "name":"Speed Rope",
       "image":"https://images.tcdn.com.br/img/img_prod/699653/corda_de_pular_rogue_froning_sr_1f_2_0_speed_rope_529_4_20190926165217.jpg"
    },
    {
       "name":"Box Jump",
       "image":"https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_1600,b_rgb:ffffff/catalog/Conditioning/Plyo%20Boxes%20/Games%20Boxes/EU-RF0253/EU-RF0253-web4_hkhz2h.png"
    },
    {
       "name":"Gymnastic Rings",
       "image":"https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_1600,b_rgb:ffffff/catalog/Bodyweight%20and%20Gymnastics/Gymnastics%20/Rings/XX45/XX45-web3_uuuzm4.png"
    },
    {
       "name":"Kettlebell",
       "image":"https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_1600,b_rgb:ffffff/catalog/Conditioning/Strength%20Equipment/Kettlebells/EU-USC001/EU-USC001-Hover_jivqpe.png"
    },
    {
       "name":"Walball",
       "image":"https://i.pinimg.com/originals/1c/0c/2e/1c0c2e7ee48b41bc0aadaf212ce549f9.jpg"
    },
    {
       "name":"BikeErg",
       "image":"https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_1600,b_rgb:ffffff/catalog/Conditioning/Endurance%20/Bikes/C22900/C22900-H_wezeu0.png"
    },
    {
       "name":"RowErg",
       "image":"https://cdn.shopify.com/s/files/1/0997/2134/products/bodyweight-conditioning-concept2-indoor-rower-model-d-pm5-1_2000x.jpg?v=1623792731"
    },
    {
       "name":"SkiErg",
       "image":"https://cdn.shopify.com/s/files/1/1241/7996/products/ski-erg-header_900x.jpg?v=1517529971"
    },
    {
       "name":"AirBike",
       "image":"http://cdn.shopify.com/s/files/1/0174/7662/products/assault_airbike_10_1_20161101092917_grande.jpg?v=1571438560"
    }
 ]
}
