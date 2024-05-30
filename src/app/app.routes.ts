import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
  {path: 'signup', component: SignUpComponent},
  {path: 'user', component: UserComponent},
  {path: '', component: UserComponent}

];
