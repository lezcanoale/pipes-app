import { Pipe, PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/hero.interface';

@Pipe({
  name: 'textColor',
})
export class TextColorPipe implements PipeTransform {
  transform(color: Color): string {
    return ColorMap[color];
  }
}
