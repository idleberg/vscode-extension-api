import vscode from 'vscode';
import channel from '../channel'

export default {
  async getCommands(): Promise<void> {
    const pick = await vscode.window.showQuickPick(['all commands', 'filter internal commands']);

    if (!pick) return;

    const commands = await vscode.commands.getCommands(pick === 'all commands' ? false : true);

    channel.log(commands.sort());
  }
};
