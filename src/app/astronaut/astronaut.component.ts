import {Component, Input} from '@angular/core';
import {MissionService} from '../mission.service';

@Component({
  selector: 'app-astronaut',
  templateUrl: './astronaut.component.html',
  styleUrls: ['./astronaut.component.css']
})
export class AstronautComponent {
  @Input() astronaut: string;
  mission = '<no mission announced>';
  announced = false;
  confirmed = false;

  constructor(private missionService: MissionService) {
    missionService.missionAnnounced$.subscribe(mission => {
      this.mission = mission;
      this.announced = true;
      this.confirmed = false;
    });
  }

  confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }
}
