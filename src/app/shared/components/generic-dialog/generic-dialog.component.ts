import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-generic-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generic-dialog.component.html',
  styleUrls: ['./generic-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenericDialogComponent {
  @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;
  @Input() title: string | undefined;

  show(): void {
    this.dialog.nativeElement.showModal();
  }

  close(): void {
    this.dialog.nativeElement.close();
  }
}
