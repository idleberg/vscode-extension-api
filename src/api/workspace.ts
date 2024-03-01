import vscode from 'vscode';
import channel from '../channel'
import dotProp from 'dot-prop';

export default {
  fs(): void {
    channel.log(vscode.workspace.fs);
  },

  isTrusted(): void {
    channel.log(vscode.workspace.isTrusted);
  },

  name(): void {
    channel.log(vscode.workspace.name);
  },

  notebookDocuments(): void {
    channel.log(vscode.workspace.notebookDocuments);
  },

  rootPath(): void {
    channel.log(vscode.workspace.rootPath);
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


  async asRelativePath(): Promise<void> {
    const input = await vscode.window.showInputBox();

    if (input) await vscode.workspace.asRelativePath(input);
  },

  async getConfiguration(): Promise<void> {
    const configuration = vscode.workspace.getConfiguration();
    const pick = await vscode.window.showInputBox({
      placeHolder: 'Enter a configuration key in dot-prop notation, e.g. `editor.fontSize`'
    });

    if (!pick) return;

    if (dotProp.has(configuration, pick)) {
      channel.log(dotProp.get(configuration, pick), pick.includes('.')
        ? pick
        : ''
      );
    } else {
      channel.log(configuration);
    }
  },

  getWorkspaceFolder(): void {
    const editor = vscode.window.activeTextEditor;

    if (!editor) {
      vscode.window.showWarningMessage('No open editors');
      return;
    }

    const workspaceFolder = vscode.workspace.getWorkspaceFolder(editor?.document?.uri);

    if (!workspaceFolder?.uri?.fsPath?.length) {
      vscode.window.showWarningMessage('No open workspaces');
      return;
    }

    channel.log(workspaceFolder.uri.fsPath);
  },

  async openNotebookDocument(): Promise<void> {
    const input = await vscode.window.showInputBox();

    if (input) await vscode.workspace.openNotebookDocument(input);
  },

  async openTextDocument(): Promise<void> {
    const input = await vscode.window.showInputBox();

    if (input) await vscode.workspace.openTextDocument(input);
  },

  async saveAll(): Promise<void> {
    vscode.workspace.saveAll();
  },
};

