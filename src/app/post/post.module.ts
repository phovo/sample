import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { postRoutes } from './post.routing';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    postRoutes
  ]
})
export class PostModule { }
