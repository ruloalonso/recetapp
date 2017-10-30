import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCgTGUTYF5Oposw1uICS8ev12z8gbBfSsU',
      authDomain: 'ng-recipes-db.firebaseapp.com'
    });

    if (localStorage.length > 0) {
      console.log('Existe token!');

    } else {
      console.log('No hay token');
    }

  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
