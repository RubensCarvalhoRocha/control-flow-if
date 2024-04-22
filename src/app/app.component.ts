import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountInfo } from './account-info';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  account: AccountInfo = {
    name: 'Melisa Evan',
    membershipStatus: 'platinum',
    validThru: '12/2022',
    CVV: '123',
  };
}
