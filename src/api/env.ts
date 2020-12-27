import vscode from 'vscode';
import channel from '../channel'

export default {
  _(): void {
    channel.log(vscode.env);
  },

  appName(): void {
    channel.log(vscode.env.appName, 'env.appName');
  },

  appRoot(): void {
    channel.log(vscode.env.appRoot, 'env.appRoot');
  },

  clipboard(): void {
    channel.log(vscode.env.clipboard, 'env.clipboard');
  },

  language(): void {
    channel.log(vscode.env.language, 'env.language');
  },

  machineId(): void {
    channel.log(vscode.env.machineId, 'env.machineId');
  },

  remoteName(): void {
    channel.log(vscode.env.remoteName, 'env.remoteName');
  },

  sessionId(): void {
    channel.log(vscode.env.sessionId, 'env.sessionId');
  },

  shell(): void {
    channel.log(vscode.env.shell, 'env.shell');
  },

  uiKind(): void {
    channel.log(vscode.env.uiKind, 'env.uiKind');
  },

  uriScheme(): void {
    channel.log(vscode.env.uriScheme, 'env.uriScheme');
  },
}
