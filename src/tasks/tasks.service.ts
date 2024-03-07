import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  // Good practice to set it private
  private tasks = [];

  // Public by default
  getAllTasks() {
    return this.tasks;
  }
}
