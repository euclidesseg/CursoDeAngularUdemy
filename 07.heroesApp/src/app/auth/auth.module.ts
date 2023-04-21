import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layouts/layout-page/layout-page.component'
import { LoginPageComponent } from './pages/layouts/login-page/login-page.component';
import { RegisterPageComponent } from './pages/layouts/register-page/register-page.component';

@NgModule({
    declarations:[
    LayoutPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
  ],
    imports:[CommonModule, AuthRoutingModule],
    exports:[]
})
export class AuthModule{

}