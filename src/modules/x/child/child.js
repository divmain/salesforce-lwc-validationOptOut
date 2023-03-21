import { LightningElement } from 'lwc';

export default class App extends LightningElement {
  static validationOptOut = ['class'];

  connectedCallback() {
    this.classList.add('foo');
  }
}