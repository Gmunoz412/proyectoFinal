// import { Component } from '@angular/core';
import { Component, NgModule, OnDestroy } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts'

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent  {
  //imlements on destroy
  results: any[] = [
    {
      "name": "Juego 1",
      "value": 30
    },
    {
      "name": "Juego 2",
      "value": 50
    },
    {
      "name": "Juego 3",
      "value": 40
    },
    {
      "name": "Juego 4",
      "value": 60
    }
  ];
  // view: any[] = [700, 400];
  // path = './public-api';

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';
  // intervalo;

  constructor() {


    // this.intervalo = setInterval(()=>{
    //   console.log('tick');
    //   const newResults = [...this.results];
    //   for(let i in newResults)
    //   {
    //     this.results[i].value = Math.round(Math.random() *500);
    //   }
    //   this.results = [...newResults];
    // },1500);
  }
  // ngOnDestroy(): void {
  //   clearInterval(this.intervalo)
  // }

  onSelect(event: any) {
    console.log(event);
  }
}
