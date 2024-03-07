import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  // Good practice to set it private
  private tasks: Task[] = [];

  // Public by default
  getAllTasks(): Task[] {
    return this.tasks;
  }
}
