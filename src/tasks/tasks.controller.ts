import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks') // Define the endpoint which the controller will handle
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get() // Define the method(GET, POST, PUT, DELETE) and route which this method will handle
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }
}
