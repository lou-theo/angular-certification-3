import { NgIterable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shapeFilter',
  standalone: true,
})
export class ShapeFilterPipe<U extends { [key: string]: unknown }, T extends NgIterable<U> = NgIterable<U>>
  implements PipeTransform
{
  transform(sourceIterable: T, filterShape: Partial<U>): Array<U> {
    return Array.from(sourceIterable).filter((item) => {
      return Object.entries(filterShape)
        .filter(([, value]) => value !== undefined)
        .every(([key, value]) => item[key] === value);
    });
  }
}
