import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
    {
        path: 'contact', component: ContactComponent
    }
]

export const MovieRouter = RouterModule.forChild(routes)