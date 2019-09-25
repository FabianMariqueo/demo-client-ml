import { Component } from '@angular/core';
import { WineQuality } from './models/wine-quality';
import { MlflowService } from './services/mlflow.service';
import { MatDialog } from '@angular/material/dialog';
import { ResponseModalComponent } from './components/response-modal/response-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public features: WineQuality = new WineQuality();

  public constructor(
    private mlflowService: MlflowService,
    private dialog: MatDialog
  ) {
  }


  public onSubmit() {
    let data = {
      data: [[
        this.features.fixed_acidity,
        this.features.volatile_acidity,
        this.features.citric_acid,
        this.features.residual_sugar,
        this.features.chlorides,
        this.features.free_sulfur_dioxide,
        this.features.total_sulfur_dioxide,
        this.features.density,
        this.features.pH,
        this.features.sulphates,
        this.features.alcohol
      ]]
    }

    this.mlflowService.predict(data).subscribe(
      Response => {
        console.log(Response);
        this.dialog.open(ResponseModalComponent, {
          width: '250px',
          data: Response
        });
      }
    );


  }
}
