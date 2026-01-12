import { Component, signal } from '@angular/core';
import { TitleHeaderComponent } from '../../components/title-header/title-header';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../heroes.data';
import { CanFlyPipe } from '../../pipes/can-fly-.pipe';
import { NameColorPipe } from '../../pipes/name-color.pipe';
import { TextColorPipe } from '../../pipes/text-color.pipe';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-custom-page',
  imports: [
    TitleHeaderComponent,
    ToggleCasePipe,
    CanFlyPipe,
    NameColorPipe,
    TextColorPipe,
    HeroCreatorPipe,
    TitleCasePipe,
  ],
  templateUrl: './custom-page.html',
})
export default class CustomPageComponent {
  name = signal<string>('Alejandra Lezcano');
  toggleUpperValue = signal<boolean>(false);

  toggleUpper() {
    this.toggleUpperValue.update((prevValue) => {
      return !prevValue;
    });
  }

  heroes = signal(heroes);
}
