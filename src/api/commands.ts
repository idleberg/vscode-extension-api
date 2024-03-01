import vscode from 'vscode';
import channel from '../channel'

export default {
  async executeCommand(): Promise<void> {
    const commandFilter = await vscode.window.showQuickPick(['all commands', 'filter internal commands']);
    const commands = await vscode.commands.getCommands(commandFilter === 'filter internal commands');
    const pick = await vscode.window.showQuickPick(commands);

    if (!pick) return;

    channel.log(`Executing command: ${pick}`);

    await vscode.commands.executeCommand(pick);
  },

  async getCommands(): Promise<void> {
    const pick = await vscode.window.showQuickPick(['all commands', 'filter internal commands']);

    if (!pick) return;

    const commands = await vscode.commands.getCommands(pick === 'all commands' ? false : true);

    channel.log(commands.sort());
  }
};
