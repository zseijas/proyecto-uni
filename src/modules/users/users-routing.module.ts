/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { UsersModule } from './users.module';

/* Containers */
import * as tablesContainers from './containers';

/* Guards */
import * as tablesGuards from './guards';
import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: tablesContainers.UsersComponent,
        data: {
            title: 'Usuarios - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'Usuarios',
                    link: '/users',
                },
                {
                    text: 'Usuarios',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [UsersModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class UsersRoutingModule {}
