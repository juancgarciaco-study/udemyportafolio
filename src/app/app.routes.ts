import { RouterModule, Routes } from '@angular/router';

import {
    HomeMainComponent,
    AboutComponent,
    ProductoComponent,
    SearchComponent
} from './components/index.paginas';
// import { PageNotFoundComponent } from './';

const app_routes: Routes = [
    { path: 'home', component: HomeMainComponent },
    { path: 'about', component: AboutComponent },
    { path: 'product/:id', component: ProductoComponent },
    { path: 'search/:termino', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
    // { path: '**', component: PageNotFoundComponent },
    // { path: 'path/:routeParam', component: MyComponent },
    // { path: 'staticPath', component: ... },
    // { path: '**', component: ... },
    // { path: 'oldPath', redirectTo: '/staticPath' },
    // { path: ..., component: ..., data: { message: 'Custom' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });
