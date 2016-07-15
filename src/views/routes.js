import {provideRouter, RouterConfig} from '@angular/router';

import {AuthGuard, UnauthGuard} from 'src/core/auth';
import {SignIn} from './sign-in';
import { RepoList} from './repoList';

const routes: RouterConfig = [
  {path:'',component: SignIn, canActivate:[UnauthGuard] },
  {path: 'repositories', component: RepoList,canActivate:[AuthGuard]}
];

export const appRouterProviders = [
  provideRouter(routes)
];
