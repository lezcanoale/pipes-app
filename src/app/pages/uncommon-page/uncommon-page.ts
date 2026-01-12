import { Component, signal } from '@angular/core';
import { TitleHeaderComponent } from '../../components/title-header/title-header';
import { Card } from '../../components/card/card';
import {
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';

const client1 = {
  name: 'Alejandra',
  gender: 'female',
  age: 25,
  address: 'Asunción, Paraguay',
};

const client2 = {
  name: 'Dori',
  gender: 'male',
  age: 27,
  address: 'Fernando de la mora, Central',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [
    TitleHeaderComponent,
    Card,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    TitleCasePipe,
  ],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPageComponent {
  //i18n Select
  client = signal(client1);
  inviteMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };
  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }

  //I18n Plural
  clients = signal(['Alejandra', 'Dori', 'Ara', 'Lucero', 'Pablo', 'Majo']);
  clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  });

  deleteClient() {
    this.clients.update((preve) => preve.slice(1));
  }

  //KeyValuePipe
  profile = {
    name: 'Alejandra',
    age: 25,
    address: 'Asunción, Paraguay',
  };
}
