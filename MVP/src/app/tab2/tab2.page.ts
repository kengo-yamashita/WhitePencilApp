import { Component } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  map: Map;

  ionViewDidEnter() { this.leafletMap()};

  leafletMap() {
    // 地図の見た目を設定
    this.map = new Map('mapId').setView([34.395483, 132.453592], 17);
    tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Code for Hiroshima',
    }).addTo(this.map);

    // マーカー
    marker([34.393454, 132.448778]).addTo(this.map)
        .bindPopup('ハチドリ舎')
        .openPopup();


  }

  ionViewWillLeave() {
    this.map.remove();
  }
}
