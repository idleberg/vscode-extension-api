import vscode from 'vscode';
import channel from '../channel'

export default {
  fs(): void {
    channel.log(vscode.workspace.fs);
  },

  name(): void {
    channel.log(vscode.workspace.name);
  },

  textDocuments(): void {
    channel.log(vscode.workspace.textDocuments);
  },

  workspaceFile(): void {
    channel.log(vscode.workspace.workspaceFile);
  },

  workspaceFolders(): void {
    channel.log(vscode.workspace.workspaceFolders);
  },

  getWorkspaceFolder(): null | string {
    const editor = vscode.window.activeTextEditor;

    if (!editor) {
      vscode.window.showWarningMessage('No open editors');
      return;
    }

    const { uri } = vscode.workspace.getWorkspaceFolder(editor?.document?.uri);

    if (!uri.fsPath?.length) {
      vscode.window.showWarningMessage('No open workspaces');
      return;
    }

    channel.log(uri.fsPath);
  },

  async openTextDocument(): Promise<void> {
    const input = await vscode.window.showInputBox();

    await vscode.workspace.openTextDocument(input);
  },

  async saveAll(): Promise<void> {
    vscode.workspace.saveAll();
  }
};

