import { PageComponent } from './cmscore/page/page.component';
import { AdminHomeComponent } from './administration/admin-home/admin-home.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'redcms/admin', component: AdminHomeComponent },
  // 404
  { path: '404', component: NotfoundComponent},
  { path: '**', component: PageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
