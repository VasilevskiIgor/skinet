import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { SharedModule } from '../shared/shared.module';
import { TextInputComponent } from '../shared/components/text-input/text-input.component';

const routes: Routes = [
  {path: '', component: CheckoutComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    TextInputComponent
  ],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
