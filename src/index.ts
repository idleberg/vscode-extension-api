import { commands, type ExtensionContext } from 'vscode';
import API from './api';

export async function activate(context: ExtensionContext): Promise<void> {

  // Commands API
  context.subscriptions.push(
    commands.registerCommand('extension.extension-api.commands.executeCommand', async () => {
      await API.commands.executeCommand();
    }),
    commands.registerCommand('extension.extension-api.commands.getCommands', async () => {
      await API.commands.getCommands();
    })
  );

  // Debug API
  context.subscriptions.push(
    commands.registerCommand('extension.extension-api.debug.activeDebugConsole', () => {
      API.debug.activeDebugConsole();
    }),
    commands.registerCommand('extension.extension-api.debug.activeDebugSession', () => {
      API.debug.activeDebugSession();
    }),
    commands.registerCommand('extension.extension-api.debug.breakpoints', () => {
      API.debug.breakpoints();
    })
  );

  // Env API
  context.subscriptions.push(
    commands.registerCommand('extension.extension-api.env', () => {
      API.env._();
    }),
    commands.registerCommand('extension.extension-api.env.appHost', () => {
      API.env.appHost();
    }),
    commands.registerCommand('extension.extension-api.env.appName', () => {
      API.env.appName();
    }),
    commands.registerCommand('extension.extension-api.env.appRoot', () => {
      API.env.appRoot();
    }),
    commands.registerCommand('extension.extension-api.env.clipboard', () => {
      API.env.clipboard();
    }),
    commands.registerCommand('extension.extension-api.env.isNewAppInstall', () => {
      API.env.isNewAppInstall();
    }),
    commands.registerCommand('extension.extension-api.env.isTelemetryEnabled', () => {
      API.env.isTelemetryEnabled();
    }),
    commands.registerCommand('extension.extension-api.env.language', () => {
      API.env.language();
    }),
    commands.registerCommand('extension.extension-api.env.logLevel', () => {
      API.env.logLevel();
    }),
    commands.registerCommand('extension.extension-api.env.machineId', () => {
      API.env.machineId();
    }),
    commands.registerCommand('extension.extension-api.env.remoteName', () => {
      API.env.remoteName();
    }),
    commands.registerCommand('extension.extension-api.env.sessionId', () => {
      API.env.sessionId();
    }),
    commands.registerCommand('extension.extension-api.env.shell', () => {
      API.env.shell();
    }),
    commands.registerCommand('extension.extension-api.env.uiKind', () => {
      API.env.uiKind();
    }),
    commands.registerCommand('extension.extension-api.env.uriScheme', () => {
      API.env.uriScheme();
    })
  );

  // Extensions API
  context.subscriptions.push(
    commands.registerCommand('extension.extension-api.extensions.all', async () => {
      await API.extensions.all();
    }),
    commands.registerCommand('extension.extension-api.extensions.getExtension', async () => {
      await API.extensions.getExtension();
    })
  );

  // L10n API
  context.subscriptions.push(
    commands.registerCommand('extension.extension-api.l10n.bundle', async () => {
      API.l10n.bundle();
    }),
    commands.registerCommand('extension.extension-api.l10n.uri', async () => {
      API.l10n.uri();
    })
  );

  // Tasks API
  context.subscriptions.push(
    commands.registerCommand('extension.extension-api.tasks.fetchTasks', async () => {
      API.tasks.fetchTasks();
    }),
    commands.registerCommand('extension.extension-api.tasks.taskExecutions', () => {
      API.tasks.taskExecutions();
    })
  );

  // Window API
  context.subscriptions.push(
    commands.registerCommand('extension.extension-api.window.activeColorTheme', () => {
      API.window.activeColorTheme();
    }),
    commands.registerCommand('extension.extension-api.window.activeNotebookEditor', () => {
      API.window.activeNotebookEditor();
    }),
    commands.registerCommand('extension.extension-api.window.activeTerminal', () => {
      API.window.activeTerminal();
    }),
    commands.registerCommand('extension.extension-api.window.activeTextEditor', () => {
      API.window.activeTextEditor();
    }),
    commands.registerCommand('extension.extension-api.window.state', () => {
      API.window.state();
    }),
    commands.registerCommand('extension.extension-api.window.tabGroups', () => {
      API.window.tabGroups();
    }),
    commands.registerCommand('extension.extension-api.window.terminals', () => {
      API.window.terminals();
    }),
    commands.registerCommand('extension.extension-api.window.visibleNotebookEditors', () => {
      API.window.visibleNotebookEditors();
    }),
    commands.registerCommand('extension.extension-api.window.visibleTextEditors', () => {
      API.window.visibleTextEditors();
    }),
    commands.registerCommand('extension.extension-api.window.setStatusBarMessage', async () => {
      await API.window.setStatusBarMessage();
    }),
    commands.registerCommand('extension.extension-api.window.showErrorMessage', async () => {
      await API.window.showErrorMessage();
    }),
    commands.registerCommand('extension.extension-api.window.showInformationMessage', async () => {
      await API.window.showInformationMessage();
    }),
    commands.registerCommand('extension.extension-api.window.showInputBox', async () => {
      await API.window.showInputBox();
    }),
    commands.registerCommand('extension.extension-api.window.showOpenDialog', async () => {
      await API.window.showOpenDialog();
    }),
    commands.registerCommand('extension.extension-api.window.showQuickPick', async () => {
      await API.window.showQuickPick();
    }),
    commands.registerCommand('extension.extension-api.window.showSaveDialog', async () => {
      await API.window.showSaveDialog();
    }),
    commands.registerCommand('extension.extension-api.window.showWarningMessage', async () => {
      await API.window.showWarningMessage();
    }),
    commands.registerCommand('extension.extension-api.window.showWorkspaceFolderPick', async () => {
      await API.window.showWorkspaceFolderPick();
    })
  );

  // Workspace API
  context.subscriptions.push(
    commands.registerCommand('extension.extension-api.workspace.fs', () => {
      API.workspace.fs();
    }),
    commands.registerCommand('extension.extension-api.workspace.isTrusted', () => {
      API.workspace.isTrusted();
    }),
    commands.registerCommand('extension.extension-api.workspace.name', () => {
      API.workspace.name();
    }),
    commands.registerCommand('extension.extension-api.workspace.notebookDocuments', () => {
      API.workspace.notebookDocuments();
    }),
    commands.registerCommand('extension.extension-api.workspace.rootPath', () => {
      API.workspace.rootPath();
    }),
    commands.registerCommand('extension.extension-api.workspace.textDocuments', () => {
      API.workspace.textDocuments();
    }),
    commands.registerCommand('extension.extension-api.workspace.workspaceFile', () => {
      API.workspace.workspaceFile();
    }),
    commands.registerCommand('extension.extension-api.workspace.workspaceFolders', () => {
      API.workspace.workspaceFolders();
    }),
    commands.registerCommand('extension.extension-api.workspace.asRelativePath', () => {
      API.workspace.asRelativePath();
    }),
    commands.registerCommand('extension.extension-api.workspace.getConfiguration', () => {
      API.workspace.getConfiguration();
    }),
    commands.registerCommand('extension.extension-api.workspace.getWorkspaceFolder', () => {
      API.workspace.getWorkspaceFolder();
    }),
    commands.registerCommand('extension.extension-api.workspace.openNotebookDocument', async () => {
      await API.workspace.openNotebookDocument();
    }),
    commands.registerCommand('extension.extension-api.workspace.openTextDocument', async () => {
      await API.workspace.openTextDocument();
    }),
    commands.registerCommand('extension.extension-api.workspace.saveAll', async () => {
      await API.workspace.saveAll();
    })
  );
}
