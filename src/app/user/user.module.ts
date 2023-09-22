import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';

import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
    RouterModule.forChild([
        { path: 'login', component: LoginComponent }
    ]),
    LoginComponent
]
})
export class UserModule { }
