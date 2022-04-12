import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SqrUiComponent } from './components/sqr-ui/sqr-ui.component';

const routes: Routes = [
  { path: '', redirectTo: '/sqr-adultos', pathMatch: 'full' },
  { path: 'sqr-adultos', component: SqrUiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
