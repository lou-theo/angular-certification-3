import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CONFERENCES } from '@core/constants/conference.constant';
import { DIVISIONS } from '@core/constants/division.constant';
import { TeamModel } from '@core/models/team.model';
import { FalsyToUndefinedPipe } from '@shared/pipes/falsy-to-undefined.pipe';
import { ShapeFilterPipe } from '@shared/pipes/shape-filter.pipe';

@Component({
  selector: 'app-team-search-bar',
  standalone: true,
  templateUrl: './team-search-bar.component.html',
  styleUrls: ['./team-search-bar.component.css'],
  imports: [FormsModule, ShapeFilterPipe, FalsyToUndefinedPipe, NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamSearchBarComponent {
  CONFERENCES = CONFERENCES;
  DIVISIONS = DIVISIONS;

  @Input() teams: TeamModel[] = [];
  @Output() teamIdSelected = new EventEmitter<string>();
  @Input() numberOfTrackingDays!: number;
  @Output() numberOfTrackingDaysChange = new EventEmitter<number>();

  selectTeam(teamId: string): void {
    this.teamIdSelected.emit(teamId);
  }

  selectNumberOfTrackingDays(numberOfTrackingDays: number): void {
    this.numberOfTrackingDaysChange.emit(numberOfTrackingDays);
  }

  trackByTeamId(index: number, team: TeamModel): string {
    return team.id.toString();
  }

  trackByDivision(index: number, divisionInfo: { division: string; conference: string }): string {
    return divisionInfo.division;
  }
}
