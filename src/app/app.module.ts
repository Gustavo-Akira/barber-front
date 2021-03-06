import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import  { reducer as loginReducer} from './shared/states/reducer/auth.reducer';
import { LoginEffect } from './shared/states/effects/login.effects';
import { storageMetaReducer } from './shared/states/reducer/storage.metareducer';
import { LoadService } from './shared/service/load.service';
import { HttpRequestInterceptor } from './shared/interceptors/httprequest.service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    StoreModule.forRoot(
      {login: loginReducer},
      {
        metaReducers: [storageMetaReducer]
      }
    ),
    EffectsModule.forRoot([LoginEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    HttpRequestInterceptor,
    {provide: HTTP_INTERCEPTORS,useClass: HttpRequestInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
