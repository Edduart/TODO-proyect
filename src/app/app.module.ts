import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { AddTasksComponent } from './components/add-tasks/add-tasks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskStatusDirective } from './directives/task-status.directive';
import { TaskConfirmDeleteDirective } from './directives/task-confirm-delete.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListTaskComponent,
    AddTasksComponent,
    TaskStatusDirective,
    TaskConfirmDeleteDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
