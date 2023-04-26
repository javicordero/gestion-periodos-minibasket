import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MakeConvocatoriaModule } from './make-convocatoria/make-convocatoria.module';
import { OpenColoseConvocatoriaButtonComponent } from './open-close-convocatoria-button/open-close-convocatoria-button.component';
import { FooterComponent } from './footer/footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderModule } from './header/header.module';
import { LoadingInterceptor } from './loading.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerComponent } from './spinner/spinner.component';
import { GameModule } from './game/game.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    OpenColoseConvocatoriaButtonComponent,
    FooterComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MakeConvocatoriaModule,
    GameModule,
    HttpClientModule,
    FontAwesomeModule,
    HeaderModule,
    LoginModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
