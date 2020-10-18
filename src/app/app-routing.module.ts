import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ForumComponent } from './forum/forum.component';

const routes: Routes = [
  {path: 'contacts', component: ContactComponent},
  {path: 'form', component: ForumComponent},
  {path: '**', redirectTo:'contacts'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
