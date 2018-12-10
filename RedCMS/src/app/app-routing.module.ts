import { CmspageComponent } from './cmspage/cmspage.component';
import { AdminHomeComponent } from './administration/admin-home/admin-home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'redcms/admin', component: AdminHomeComponent },
  // 404
  { path: '**', component: CmspageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
