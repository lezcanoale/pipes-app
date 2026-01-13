import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'textFilter',
})
export class TextFilterPipe implements PipeTransform {
  transform(value: Hero[], searchQuery: string): Hero[] {
    if (!searchQuery) return value;
    const query = searchQuery.toLowerCase();
    return value.filter((hero) => hero.name.toLowerCase().includes(query));
  }
}
