import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { EquipmentCardComponent } from './equipment-card/equipment-card.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [		
    AppComponent,
      EquipmentListComponent,
      EquipmentCardComponent,
      HeaderComponent,
      FooterComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
