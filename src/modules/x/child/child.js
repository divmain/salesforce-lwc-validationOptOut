import { LightningElement } from 'lwc';

export default class App extends LightningElement {
  // This ⤵ is also permitted, but will disable all validation for the component.
  // static validationOptOut = true
  static validationOptOut = ['class'];

  connectedCallback() {
    this.classList.add('foo');
  }
}