import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { Page404Component } from './components/page404/page404.component';
import { PageNotAllowedComponent } from './components/page-not-allowed/page-not-allowed.component';
import { PayPalComponent } from './components/pay-pal/pay-pal.component';

@NgModule({
  declarations: [
    BannerComponent,
    Page404Component,
    PageNotAllowedComponent,
    PayPalComponent,
  ],
  imports: [CommonModule],
  exports: [
    BannerComponent,
    Page404Component,
    PageNotAllowedComponent,
    PayPalComponent,
  ],
})
export class SharedModule {}
