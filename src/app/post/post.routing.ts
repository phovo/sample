import { Routes, RouterModule } from '@angular/router'
import { DetailComponent } from './detail/detail.component'

const routes: Routes = [
    {
        path: 'detail',
        component: DetailComponent,
    }
]
export const postRoutes = RouterModule.forChild(routes)