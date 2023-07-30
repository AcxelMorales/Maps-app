import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { Map } from 'mapbox-gl';

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css'],
})
export class FullScreenPageComponent implements AfterViewInit {

  @ViewChild('map') mapRef?: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.mapRef)
    if (!this.mapRef) {
      throw 'Elemento HTML no encontrado';
    }

    const map = new Map({
      container: this.mapRef?.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.5, 40],
      zoom: 9,
    });
  }

}
