import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdxHeaderComponent } from './components/mdx-header/mdx-header.component';
import { MdxFooterComponent } from './components/mdx-footer/mdx-footer.component';
import { MdxEventConfigComponent } from './components/mdx-event-config/mdx-event-config.component';
import { EventManagementService } from './services/event-management.service'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEventComponent } from './components/add-event/add-event.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ViewEventComponent } from './components/view-event/view-event.component'

@NgModule({
  declarations: [
    AppComponent,
    MdxHeaderComponent,
    MdxFooterComponent,
    MdxEventConfigComponent,
    AddEventComponent,
    EditEventComponent,
    FilterPipe,
    ViewEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EventManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
