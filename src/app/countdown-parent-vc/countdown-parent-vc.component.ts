import {Component, AfterViewInit, ViewChild} from '@angular/core';
import {CountdownTimerComponent} from '../countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-countdown-parent-vc',
  templateUrl: './countdown-parent-vc.component.html',
  styleUrls: ['./countdown-parent-vc.component.css']
})
export class CountdownParentVcComponent implements AfterViewInit {
  @ViewChild(CountdownTimerComponent)
  private timerComponent: CountdownTimerComponent;

  seconds() {
    return 0;
  }

  ngAfterViewInit(): void {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  start() {
    this.timerComponent.start();
  }

  stop() {
    this.timerComponent.stop();
  }
}
