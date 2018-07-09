/**
 * @author Kishor Patil
 * @email kishor.patil0589@gmail.com
 * @create date 2018-07-09 12:53:10
 * @modify date 2018-07-09 12:53:10
 * @desc [description]
*/
import { BrowserModule }                                 from '@angular/platform-browser';
import { NgModule }                                      from '@angular/core';

import { AppRoutingModule }                              from './app-routing.module';
import { AppComponent }                                  from './app.component';

import { CommonutilsModule }                             from './commonutils/commonutils.module'
import { PipesModule  }                                  from './pipes/pipes.module';
import { SharedModule  }                                 from './shared/shared.module';


import { MatInputModule } from '@angular/material/input';


import { HeaderComponent }                               from './base-display/header/header.component';
import { FooterComponent }                               from './base-display/footer/footer.component'
import { CoreContainerComponent }                        from './base-display/core-container/core-container.component';
import { DashboardComponent }                            from './features/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CoreContainerComponent,
    DashboardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MatInputModule,
    // app modules
    CommonutilsModule,
    SharedModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
