import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { Task } from '../../models/task.interface';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.scss',
})
export class ListTaskComponent implements OnChanges {
  @Input('listTask') tasks: Task[] = [];
  @Input('change') change: boolean = false;

  @Output() taskCompleted: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() taskDeleted: EventEmitter<number> = new EventEmitter<number>();

  completeTask(task: Task): void {
    this.taskCompleted.emit(task);
  }

  deleteTask(id: number): void {
    this.taskDeleted.emit(id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['change']) {
      console.log('new value', changes['change'].currentValue);
    }
  }
}
