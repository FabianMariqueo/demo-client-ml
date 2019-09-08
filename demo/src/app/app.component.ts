import { Component } from '@angular/core';
import { WineQuality } from './models/wine-quality';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public features: WineQuality = new WineQuality();

  public constructor() {
  }

  public formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  public onSubmit() {
    console.log(this.features);
  }
}
