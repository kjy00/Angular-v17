import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import MessagesComponent from './messages/messages.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, MessagesComponent, RouterLink],
  standalone: true,
})
export class AppComponent {
  title = 'Tour of Heroes';
}
