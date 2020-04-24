import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { Page404Component } from './components/page404/page404.component';
import { PayPalComponent } from './components/pay-pal/pay-pal.component';

@NgModule({
  declarations: [BannerComponent, Page404Component, PayPalComponent],
  imports: [CommonModule],
  exports: [BannerComponent, Page404Component, PayPalComponent],
})
export class SharedModule {}
