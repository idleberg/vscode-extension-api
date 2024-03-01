import { tasks } from 'vscode';
import channel from '../channel'

export default {
  taskExecutions(): void {
    channel.log(tasks.taskExecutions);
  },

  async fetchTasks(): Promise<void> {
    const fetchedTasks = await tasks.fetchTasks();

    channel.log(fetchedTasks);
  },
}
