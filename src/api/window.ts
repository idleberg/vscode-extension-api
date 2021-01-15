import vscode from 'vscode';
import channel from '../channel'

export default {
  activeColorTheme(): void {
    channel.log(vscode.window.activeColorTheme);
  },

  activeTerminal(): void {
    channel.log(vscode.window.activeTerminal);
  },

  activeTextEditor(): void {
    channel.log(vscode.window.activeTextEditor);
  },

  state(): void {
    channel.log(vscode.window.state);
  },

  terminals(): void {
    channel.log(vscode.window.terminals);
  },

  visibleTextEditors(): void {
    channel.log(vscode.window.visibleTextEditors);
  },

  async setStatusBarMessage(): Promise<void> {
    const input = await vscode.window.showInputBox();

    if (input) vscode.window.setStatusBarMessage(input);
  },

  async showErrorMessage(): Promise<void> {
    const input = await vscode.window.showInputBox();

    if (input) vscode.window.showErrorMessage(`Error Message: ${input}`);
  },

  async showInformationMessage(): Promise<void> {
    const input = await vscode.window.showInputBox();

    if (input) vscode.window.showInformationMessage(`Information Message: ${input}`);
  },

  async showInputBox(): Promise<void> {
    const input = await vscode.window.showInputBox();

    if (input) channel.log(input);
  },

  async showOpenDialog(): Promise<void> {
    await vscode.window.showOpenDialog();
  },

  async showQuickPick(): Promise<void> {
    const pick = await vscode.window.showQuickPick(['1', '2', '3']);

    if (pick) channel.log(`You picked ${pick}`);
  },

  async showSaveDialog(): Promise<void> {
    await vscode.window.showSaveDialog();
  },

  async showWarningMessage(): Promise<void> {
    const input = await vscode.window.showInputBox();

    vscode.window.showWarningMessage(`Warning Message: ${input}`);
  },

  async showWorkspaceFolderPick(): Promise<void> {
    await vscode.window.showWorkspaceFolderPick();
  },
};

