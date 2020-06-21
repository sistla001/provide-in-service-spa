import { Component } from '@angular/core';
import { KsPlatformService } from 'ks-platform-service';
import { KsRootService } from 'ks-root-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public platformService: KsPlatformService,
              public rootService: KsRootService) { }
  pValue = 0;
  rValue = 0;
  updatePlatformValue() {
    let val = this.platformService.getValue();
    val++;
    this.platformService.setValue(val);
  }

  getPlatformValue() {
    this.pValue = this.platformService.getValue();
  }


  updateRootValue() {
    let val = this.rootService.getValue();
    val++;
    this.rootService.setValue(val);
  }

  getRootValue() {
    this.rValue = this.rootService.getValue();
  }
}
