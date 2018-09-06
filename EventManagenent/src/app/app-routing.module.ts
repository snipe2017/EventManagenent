import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MdxHeaderComponent } from './components/mdx-header/mdx-header.component';
import { MdxEventConfigComponent } from './components/mdx-event-config/mdx-event-config.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { ViewEventComponent } from './components/view-event/view-event.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: '', component: MdxHeaderComponent, children: [
      { path: '', component: MdxEventConfigComponent},
      { path: 'events', component: MdxEventConfigComponent},
      { path: 'addEvent', component: AddEventComponent},
      { path: 'editEvent/:id', component: EditEventComponent},
      { path: 'viewEvent/:id', component: ViewEventComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
