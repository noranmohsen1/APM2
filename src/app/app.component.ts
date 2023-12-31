import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './app.animation';
import { MessageService } from './messages/message.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'pm-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [slideInAnimation],
    standalone: true,
    imports: [NgIf, RouterLinkActive, RouterLink, RouterOutlet]
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
  loading = true;

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  get isMessageDisplayed(): boolean {
    return this.messageService.isDisplayed;
  }

  constructor(private authService: AuthService,
              private router: Router,
              private messageService: MessageService)
    {
router.events.subscribe((routerEvent: Event | any) => {
this.checkRouterEvent(routerEvent);
});
}

 checkRouterEvent(routerEvent: Event): void {
  if (routerEvent instanceof NavigationStart) {
    this.loading = true;
  }

  if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
    this.loading = false;
  }
}
displayMessages():void{
  this.router.navigate([{outlets: { popup: ['messages']}}]);
  this.messageService.isDisplayed = false;
}

hideMessages(): void {
  this.router.navigate([{ outlets: { popup: null } }]);
  this.messageService.isDisplayed = false;
}
  logOut(): void {
    this.authService.logout();
    this.router.navigateByUrl('/welcome');
  }
}
