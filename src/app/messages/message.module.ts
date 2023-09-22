import { NgModule } from '@angular/core';
import { MessageComponent } from './message.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
    RouterModule.forChild([
        { path: 'messages',
            component: MessageComponent,
            outlet: 'popup' }
    ]),
    MessageComponent
]
})
export class MessageModule { }
