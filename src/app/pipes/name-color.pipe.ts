import { Pipe, PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/hero.interface';

@Pipe({
  name: 'nameColor',
})
export class NameColorPipe implements PipeTransform {
  transform(value: number, ...args: any[]): any {
    return Color[value];
  }
}
