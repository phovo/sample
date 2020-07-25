import { RouterModule, Routes } from '@angular/router'
import { PostComponent } from './post/post.component'
import{ MovieComponent } from './movie/movie.component'
import { DetailComponent } from './post/detail/detail.component'
import { ErrorComponent } from './error/error/error.component'
import { ContactComponent } from './movie/contact/contact.component'

export const appRoutes: Routes = [
    { path: '', redirectTo: "post", pathMatch: 'full'},
    { path: "post", component: PostComponent },
    { path: 'post/:id', component: DetailComponent },
    { path: 'movie', component: MovieComponent },
    { path: 'movie/:title',component: ContactComponent},
    { path: '**', component: ErrorComponent }
]