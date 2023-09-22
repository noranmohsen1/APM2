import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from './message.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
    templateUrl: './message.component.html',
    styles: [
        '.message-row { margin-bottom: 10px }'
    ],
    standalone: true,
    imports: [NgFor, NgIf]
})
export class MessageComponent {
  get messages(): string[] {
    return this.messageService.messages;
  }

  constructor(private messageService: MessageService,
              private router: Router) { }

  close(): void {
    // Close the popup.
    this.router.navigate([{ outlets: { popup: null } }]);
    this.messageService.isDisplayed = false;
  }
}
