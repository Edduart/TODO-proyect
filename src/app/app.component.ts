import { Component } from '@angular/core';
import { Task } from './models/task.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'TODO-project';

  newChange: boolean = false;

  tasks: Task[] = [];

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  markTaskAsCompleted(task: Task) {
    task.completed = !task.completed;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
