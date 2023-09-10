import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { CuentasComponent } from './components/cuentas/cuentas.component';
import { RelacionPagosComponent } from './components/relacion-pagos/relacion-pagos.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresosComponent,
    GastosComponent,
    CuentasComponent,
    RelacionPagosComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }