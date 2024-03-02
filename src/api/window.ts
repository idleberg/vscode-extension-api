import { window } from 'vscode';
import channel from '../channel'

export default {
  activeColorTheme(): void {
    channel.log(window.activeColorTheme);
  },

  activeNotebookEditor(): void {
    channel.log(window.activeNotebookEditor);
  },

  activeTerminal(): void {
    channel.log(window.activeTerminal);
  },

  activeTextEditor(): void {
    channel.log(window.activeTextEditor);
  },

  state(): void {
    channel.log(window.state);
  },

  tabGroups(): void {
    channel.log(window.tabGroups);
  },

  terminals(): void {
    channel.log(window.terminals);
  },

  visibleNotebookEditors(): void {
    channel.log(window.visibleNotebookEditors);
  },

  visibleTextEditors(): void {
    channel.log(window.visibleTextEditors);
  },

  /**
   * TODO: Add the following methods to the API
   * - createInputBox()
   * - createOutputChannel()
   * - createQuickPick()
   * - createStatusBarItem() ?
   * - createTerminal() ?
   * - showNotebookDocument ?
   * - showTextDocument
   */

  async setStatusBarMessage(): Promise<void> {
    const input = await window.showInputBox();

    if (input) window.setStatusBarMessage(input);
  },

  async showErrorMessage(): Promise<void> {
    const input = await window.showInputBox();

    if (input) window.showErrorMessage(`Error Message: ${input}`);
  },

  async showInformationMessage(): Promise<void> {
    const input = await window.showInputBox();

    if (input) window.showInformationMessage(`Information Message: ${input}`);
  },

  async showInputBox(): Promise<void> {
    const input = await window.showInputBox();

    if (input) channel.log(input);
  },

  async showOpenDialog(): Promise<void> {
    await window.showOpenDialog();
  },

  async showQuickPick(): Promise<void> {
    const option = await window.showQuickPick(['Select one item only', 'Allow selecting multiple items']);
    const pick = await window.showQuickPick(['1', '2', '3'], {
      canPickMany: option === 'Allow selecting multiple items',
    });

    if (pick) channel.log(`You picked ${pick}`);
  },

  async showSaveDialog(): Promise<void> {
    await window.showSaveDialog();
  },

  async showWarningMessage(): Promise<void> {
    const input = await window.showInputBox();

    window.showWarningMessage(`Warning Message: ${input}`);
  },

  async showWorkspaceFolderPick(): Promise<void> {
    await window.showWorkspaceFolderPick();
  },
};

