import { CommonModule } from '@angular/common';
import { MovieRouter } from './movie.routing';
import { ContactComponent } from "./contact/contact.component";
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [ContactComponent],
    imports: [CommonModule,
        MovieRouter
    ]
})

export class MovieModule {}
