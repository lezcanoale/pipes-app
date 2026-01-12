import { I18nSelectPipe } from '@angular/common';
import { Component, input, signal } from '@angular/core';
//Pipe para renderizar contenido que pasa del padre al hijo
@Component({
  selector: 'app-card',
  imports: [I18nSelectPipe],
  templateUrl: './card.html',
})
export class Card {
  title = input.required<string>();
}
