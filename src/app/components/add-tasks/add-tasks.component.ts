import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Task } from '../../models/task.interface';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrl: './add-tasks.component.scss',
})
export class AddTasksComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  @Output() taskAdded: EventEmitter<Task> = new EventEmitter<Task>();

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      title: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
    });
  }

  sendTask(): void {
    if (this.form.valid) {
      const newTask: Task = {
        id: Math.floor(Math.random() * 1000),
        title: this.form.value.title,
        completed: false,
      };
      this.taskAdded.emit(newTask);
      this.form.reset();
      console.log(this.form.value.title);
    }
  }

  tasks: Task[] = [];

  taskNumber: number = this.tasks.length;
  taskTittle: string = '';
  buttonIsActive: boolean = true;

  completeTask(task: Task): void {
    task.completed = !task.completed;
  }

  delete(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.taskNumber = this.tasks.length;
  }

  /*enableButton() {
    console.log(this.taskTittle);
    if (this.taskTittle.length > 0) {
      this.buttonIsActive = false;
    } else {
      this.buttonIsActive = true;
    }
  }

  sendTask() {
    console.log('task sended', this.taskTittle);
  }

  sendData(form: NgForm) {
    if (form.valid) {
      console.log(this.taskTittle);
    }
  }*/
}
