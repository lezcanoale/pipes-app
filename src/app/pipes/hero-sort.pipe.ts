import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroSortBy',
})
export class HeroSortByPipe implements PipeTransform {
  transform(heores: Hero[], sortBy: keyof Hero | null): Hero[] {
    switch (sortBy) {
      case 'name':
        return heores.sort((a, b) => a.name.localeCompare(b.name));
      case 'canFly':
        return heores.sort((a, b) => (a.canFly === b.canFly ? 0 : a.canFly ? -1 : 1));
      case 'color':
        return heores.sort((a, b) => a.color - b.color);
      default:
        return heores;
    }
  }
}
