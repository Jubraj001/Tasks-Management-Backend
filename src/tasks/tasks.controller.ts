import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './create-task.dto';

@Controller('tasks') // Define the endpoint which the controller will handle
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get() // Define the method(GET, POST, PUT, DELETE) and route which this method will handle
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }
}
