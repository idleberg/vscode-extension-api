import vscode from 'vscode';
import channel from '../channel'

export default {
  taskExecutions(): void {
    channel.log(vscode.tasks.taskExecutions);
  },

  async fetchTasks(): Promise<void> {
    const tasks = await vscode.tasks.fetchTasks();

    channel.log(tasks);
  },
}
