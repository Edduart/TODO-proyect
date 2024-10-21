import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTaskConfirmDelete]',
})
export class TaskConfirmDeleteDirective {
  constructor() {}

  @Input('appTaskConfirmDelete') taskTitle: string = '';

  @HostListener('click', ['$event']) onClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    const confirmed = confirm(
      `you are sure of delete this task? ${this.taskTitle}`
    );
    if (confirmed) {
      alert('task deleted');
    }
  }
}
