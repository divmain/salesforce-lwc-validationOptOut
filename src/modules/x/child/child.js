import { LightningElement } from 'lwc';

export default class App extends LightningElement {
  connectedCallback() {
    this.classList.add('foo');
  }
}