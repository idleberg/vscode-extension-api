import vscode from 'vscode';
import API from './api';

async function activate(context: vscode.ExtensionContext): Promise<void> {

  // Commands API
  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.commands.executeCommand', async () => {
      await API.commands.executeCommand();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.commands.getCommands', async () => {
      await API.commands.getCommands();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.configuration.getConfiguration', async () => {
      await API.configuration.getConfiguration();
    })
  );

  // Debug API
  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.debug.activeDebugConsole', () => {
      API.debug.activeDebugConsole();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.debug.activeDebugSession', () => {
      API.debug.activeDebugSession();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.debug.breakpoints', () => {
      API.debug.breakpoints();
    })
  );

  // Env API
  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.env', () => {
      API.env._();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.env.appHost', () => {
      API.env.appHost();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.env.appName', () => {
      API.env.appName();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.env.appRoot', () => {
      API.env.appRoot();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.env.clipboard', () => {
      API.env.clipboard();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.env.isNewAppInstall', () => {
      API.env.isNewAppInstall();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.env.isTelemetryEnabled', () => {
      API.env.isTelemetryEnabled();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.env.language', () => {
      API.env.language();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.env.logLevel', () => {
      API.env.logLevel();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.env.machineId', () => {
      API.env.machineId();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.env.remoteName', () => {
      API.env.remoteName();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.env.sessionId', () => {
      API.env.sessionId();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.env.shell', () => {
      API.env.shell();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.env.uiKind', () => {
      API.env.uiKind();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.env.uriScheme', () => {
      API.env.uriScheme();
    })
  );

  // Extensions API
  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.extensions.all', async () => {
      await API.extensions.all();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.extensions.getExtension', async () => {
      await API.extensions.getExtension();
    })
  );

  // Tasks API
  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.tasks.fetchTasks', async () => {
      API.tasks.fetchTasks();
    })
  );

  // Tasks API
  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.tasks.taskExecutions', () => {
      API.tasks.taskExecutions();
    })
  );

  // Window API
  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.activeColorTheme', () => {
      API.window.activeColorTheme();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.activeNotebookEditor', () => {
      API.window.activeNotebookEditor();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.activeTerminal', () => {
      API.window.activeTerminal();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.activeTextEditor', () => {
      API.window.activeTextEditor();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.state', () => {
      API.window.state();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.tabGroups', () => {
      API.window.tabGroups();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.terminals', () => {
      API.window.terminals();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.visibleNotebookEditors', () => {
      API.window.visibleNotebookEditors();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.visibleTextEditors', () => {
      API.window.visibleTextEditors();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.setStatusBarMessage', async () => {
      await API.window.setStatusBarMessage();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.showErrorMessage', async () => {
      await API.window.showErrorMessage();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.showInformationMessage', async () => {
      await API.window.showInformationMessage();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.showInputBox', async () => {
      await API.window.showInputBox();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.showOpenDialog', async () => {
      await API.window.showOpenDialog();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.showQuickPick', async () => {
      await API.window.showQuickPick();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.showSaveDialog', async () => {
      await API.window.showSaveDialog();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.showWarningMessage', async () => {
      await API.window.showWarningMessage();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.showWorkspaceFolderPick', async () => {
      await API.window.showWorkspaceFolderPick();
    })
  );

  // Workspace API
  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.workspace.fs', () => {
      API.workspace.fs();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.workspace.name', () => {
      API.workspace.name();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.workspace.textDocuments', () => {
      API.workspace.textDocuments();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.workspace.workspaceFile', () => {
      API.workspace.workspaceFile();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.workspace.workspaceFolders', () => {
      API.workspace.workspaceFolders();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.workspace.getWorkspaceFolder', () => {
      API.workspace.getWorkspaceFolder();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.workspace.openTextDocument', async () => {
      await API.workspace.openTextDocument();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.workspace.saveAll', async () => {
      await API.workspace.saveAll();
    })
  );
}

export { activate };
