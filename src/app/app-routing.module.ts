import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuroComponent } from "../app/muro/muro.component";

const routes: Routes = [
  {
    path: '',
    component: MuroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
