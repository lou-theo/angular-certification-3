import { AfterContentChecked, ChangeDetectorRef, Directive, ElementRef, Input, Optional, Self } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: 'select[appResetIfOptionUnavailable]',
  standalone: true,
})
export class ResetIfOptionUnavailableDirective implements AfterContentChecked {
  /** The value of the option that should be selected if the selected option is unavailable. */
  @Input() appResetIfOptionUnavailable = '';

  private get selectedOption(): HTMLOptionElement | null {
    return this.elementRef.nativeElement.selectedOptions[0];
  }

  constructor(
    private elementRef: ElementRef<HTMLSelectElement>,
    @Optional() @Self() private ngModel: NgModel,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngAfterContentChecked(): void {
    const availableOptions = Array.from(this.elementRef.nativeElement.options);
    if (availableOptions.some((option: HTMLOptionElement) => option.value === this.selectedOption?.value)) {
      return;
    }
    setTimeout(() => this.resetInput());
  }

  private resetInput(): void {
    this.elementRef.nativeElement.value = this.appResetIfOptionUnavailable;
    if (this.ngModel) {
      // This is necessary because the ngModel directive does not update the value of the form control when the value of the select element changes.
      this.ngModel.control?.setValue(this.appResetIfOptionUnavailable);
      // in case the ngModel directive is used in a component that uses OnPush change detection, we need to manually mark the component for change detection.
      this.changeDetectorRef.markForCheck();
    }
  }
}
