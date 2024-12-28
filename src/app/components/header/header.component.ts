import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-slate-100 px-4 py-4 shadow-md flex justify-between items-center">
      <span class="text-xl">My App</span>
      <app-primary-button label="Cart" (btnClicked)="showButtonClicked()"/>
    </div>
  `,
  styles: ``,
})
export class HeaderComponent {

  showButtonClicked() {
    console.log('clicked');
  }

}
