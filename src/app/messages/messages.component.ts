import { Component } from '@angular/core';
import MessageService from '../message.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  imports: [NgFor, NgIf],
  standalone: true,
})
export default class MessagesComponent {
  constructor(public messageService: MessageService) {}
}
