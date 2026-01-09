import { Component, signal } from '@angular/core';
import { TitleHeaderComponent } from '../../components/title-header/title-header';
import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-number-page',
  imports: [TitleHeaderComponent, DecimalPipe, PercentPipe, CurrencyPipe],
  templateUrl: './number-page.html',
})
export default class NumberPageComponent {
  totalSells = signal(2_433_232.5567);
  percent = signal(0.4856);
}
