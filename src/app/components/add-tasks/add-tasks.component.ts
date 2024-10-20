import { Component } from '@angular/core';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrl: './add-tasks.component.scss',
})
export class AddTasksComponent {
  taskNumber: number = 10;
  taskTittle: string = '';
  buttonIsActive: boolean = true;

  enableButton() {
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
}
