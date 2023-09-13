import { Routes } from '@angular/router';

import { IngresosComponent } from './components/ingresos/ingresos.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { CuentasComponent } from './components/cuentas/cuentas.component';
import { RelacionPagosComponent } from './components/relacion-pagos/relacion-pagos.component';

export const ROUTES : Routes = [
    { path: 'ingresos', component: IngresosComponent },
    { path: 'gastos', component: GastosComponent },
    { path: 'cuentas', component: CuentasComponent },
    { path: 'relacion-pagos', component: RelacionPagosComponent },
    { path: '', pathMatch: 'full', redirectTo: 'cuentas'}
];