import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PickupCallCardComponent } from './pickup-call-card/pickup-call-card.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  exports: [PickupCallCardComponent],
  declarations: [PickupCallCardComponent],
})
export class SharedModules {}
