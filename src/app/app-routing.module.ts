import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaybehereComponent } from './maybehere/maybehere.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'maybehere', component: MaybehereComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
