import { Routes, RouterModule } from '@angular/router';
import { Pagina2Component } from './pagina2/pagina2.component';
import { Pagina3Component } from './pagina3/pagina3.component';

const appRoutes:Routes=[
	{
		path:'pagina',
		component:Pagina2Component
	},{
		path:'pagina/2',
		component:Pagina3Component
	}

]

export const AppRouting = RouterModule.forRoot(appRoutes, {
useHash: false
});
