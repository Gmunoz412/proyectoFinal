import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { GraficoBarraHorizontalComponent } from './grafico-barra-horizontal/grafico-barra-horizontal.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [
    NavbarComponent,
    GraficoBarraHorizontalComponent
  ],
  exports:[
    NavbarComponent,
    GraficoBarraHorizontalComponent,
    NgxChartsModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    NgxChartsModule
  ]
})
export class ComponentsModule { }
