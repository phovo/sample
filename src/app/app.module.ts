import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SampleComponent } from './components/sample/sample.component';
import { NgstyleComponent } from './component/ngstyle/ngstyle.component';
import { EventComponent } from './component/event/event.component';
import { MovieComponent } from './movie/movie.component';
import { SwitchComponent } from './component/switch/switch.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { InputComponent } from './input/input.component';
import { CountComponent } from './count/count.component';
import { FirstComponent } from './first/first.component';
import { ListComponent } from './list/list.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { PipeComponent } from './pipe/pipe.component';
import { HoangDucPipe } from './convert.pipe';
import { PipeTransformComponent } from './pipe-transform/pipe-transform.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { NgForPipeComponent } from './ng-for-pipe/ng-for-pipe.component';
import { ServicePipeComponent } from './service-pipe/service-pipe.component';
import { DatePipe } from '@angular/common';
import { HttpComponent } from './http/http.component';
import { PostComponent } from './post/post.component';
import { DeleteComponent } from './delete/delete.component';
import { AppHttpInterceptor } from './AppHttpInterceptor';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.module.routing';
import { ErrorComponent } from './error/error/error.component'
import { PostModule } from './post/post.module';
import { ContactComponent } from "./movie/contact/contact.component";
import { MovieModule } from './movie/movie.module';


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    NgstyleComponent,
    EventComponent,
    MovieComponent,
    SwitchComponent,
    SwitchCaseComponent,
    NgIfComponent,
    InputComponent,
    CountComponent,
    FirstComponent,
    ListComponent,
    NgStyleComponent,
    PipeComponent,
    HoangDucPipe,
    PipeTransformComponent,
    AsyncPipeComponent,
    NgForPipeComponent,
    ServicePipeComponent,
    HttpComponent,
    PostComponent,
    DeleteComponent,
    ErrorComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MovieModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
