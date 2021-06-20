import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { PickupCallCardComponent } from './pickup-call-card/pickup-call-card.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  exports: [PickupCallCardComponent, ErrorMessageComponent],
  declarations: [PickupCallCardComponent, ErrorMessageComponent],
})
export class SharedModules {}
