import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Task } from '../../models/task.interface';


@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrl: './add-tasks.component.scss',
})
export class AddTasksComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

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
      console.log(this.form.value.title);
    }
  }

  tasks: Task[] = [
    { id: 1, title: 'task 1', completed: false },
    { id: 2, title: 'task 2', completed: false },
    { id: 3, title: 'task 3', completed: false },
    { id: 4, title: 'task 4', completed: false },
    { id: 5, title: 'task 5', completed: false },
  ];

  taskNumber: number = this.tasks.length;
  taskTittle: string = '';
  buttonIsActive: boolean = true;

  completeTask(task: Task): void {
    task.completed = !task.completed;
  }

  delete(id: number): void {
    this.tasks = this.tasks.filter(task=>task.id !== id);
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
