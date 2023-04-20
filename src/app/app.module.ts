import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MakeConvocatoriaModule } from './make-convocatoria/make-convocatoria.module';
import { CuartosModule } from './cuartos/cuartos.module';
import { ConvocadosListComponent } from './convocados-list/convocados-list.component';
import { OpenColoseConvocatoriaButtonComponent } from './open-close-convocatoria-button/open-close-convocatoria-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ConvocadosListComponent,
    OpenColoseConvocatoriaButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MakeConvocatoriaModule,
    CuartosModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
