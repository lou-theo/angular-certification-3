import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'falsyToUndefined',
  standalone: true,
})
export class FalsyToUndefinedPipe implements PipeTransform {
  transform(value: unknown): unknown | undefined {
    return value || undefined;
  }
}
