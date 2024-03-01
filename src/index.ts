import { commands, type ExtensionContext } from 'vscode';
import API from './api';

export async function activate(context: ExtensionContext): Promise<void> {

  // Commands API
  context.subscriptions.push(
    commands.registerTextEditorCommand('extension.extension-api.commands.executeCommand', async () => {
      await API.commands.executeCommand();
    }),
    commands.registerTextEditorCommand('extension.extension-api.commands.getCommands', async () => {
      await API.commands.getCommands();
    })
  );

  // Debug API
  context.subscriptions.push(
    commands.registerTextEditorCommand('extension.extension-api.debug.activeDebugConsole', () => {
      API.debug.activeDebugConsole();
    }),
    commands.registerTextEditorCommand('extension.extension-api.debug.activeDebugSession', () => {
      API.debug.activeDebugSession();
    }),
    commands.registerTextEditorCommand('extension.extension-api.debug.breakpoints', () => {
      API.debug.breakpoints();
    })
  );

  // Env API
  context.subscriptions.push(
    commands.registerTextEditorCommand('extension.extension-api.env', () => {
      API.env._();
    }),
    commands.registerTextEditorCommand('extension.extension-api.env.appHost', () => {
      API.env.appHost();
    }),
    commands.registerTextEditorCommand('extension.extension-api.env.appName', () => {
      API.env.appName();
    }),
    commands.registerTextEditorCommand('extension.extension-api.env.appRoot', () => {
      API.env.appRoot();
    }),
    commands.registerTextEditorCommand('extension.extension-api.env.clipboard', () => {
      API.env.clipboard();
    }),
    commands.registerTextEditorCommand('extension.extension-api.env.isNewAppInstall', () => {
      API.env.isNewAppInstall();
    }),
    commands.registerTextEditorCommand('extension.extension-api.env.isTelemetryEnabled', () => {
      API.env.isTelemetryEnabled();
    }),
    commands.registerTextEditorCommand('extension.extension-api.env.language', () => {
      API.env.language();
    }),
    commands.registerTextEditorCommand('extension.extension-api.env.logLevel', () => {
      API.env.logLevel();
    }),
    commands.registerTextEditorCommand('extension.extension-api.env.machineId', () => {
      API.env.machineId();
    }),
    commands.registerTextEditorCommand('extension.extension-api.env.remoteName', () => {
      API.env.remoteName();
    }),
    commands.registerTextEditorCommand('extension.extension-api.env.sessionId', () => {
      API.env.sessionId();
    }),
    commands.registerTextEditorCommand('extension.extension-api.env.shell', () => {
      API.env.shell();
    }),
    commands.registerTextEditorCommand('extension.extension-api.env.uiKind', () => {
      API.env.uiKind();
    }),
    commands.registerTextEditorCommand('extension.extension-api.env.uriScheme', () => {
      API.env.uriScheme();
    })
  );

  // Extensions API
  context.subscriptions.push(
    commands.registerTextEditorCommand('extension.extension-api.extensions.all', async () => {
      await API.extensions.all();
    }),
    commands.registerTextEditorCommand('extension.extension-api.extensions.getExtension', async () => {
      await API.extensions.getExtension();
    })
  );

  // L10n API
  context.subscriptions.push(
    commands.registerTextEditorCommand('extension.extension-api.l10n.bundle', async () => {
      API.l10n.bundle();
    }),
    commands.registerTextEditorCommand('extension.extension-api.l10n.uri', async () => {
      API.l10n.uri();
    })
  );

  // Tasks API
  context.subscriptions.push(
    commands.registerTextEditorCommand('extension.extension-api.tasks.fetchTasks', async () => {
      API.tasks.fetchTasks();
    }),
    commands.registerTextEditorCommand('extension.extension-api.tasks.taskExecutions', () => {
      API.tasks.taskExecutions();
    })
  );

  // Window API
  context.subscriptions.push(
    commands.registerTextEditorCommand('extension.extension-api.window.activeColorTheme', () => {
      API.window.activeColorTheme();
    }),
    commands.registerTextEditorCommand('extension.extension-api.window.activeNotebookEditor', () => {
      API.window.activeNotebookEditor();
    }),
    commands.registerTextEditorCommand('extension.extension-api.window.activeTerminal', () => {
      API.window.activeTerminal();
    }),
    commands.registerTextEditorCommand('extension.extension-api.window.activeTextEditor', () => {
      API.window.activeTextEditor();
    }),
    commands.registerTextEditorCommand('extension.extension-api.window.state', () => {
      API.window.state();
    }),
    commands.registerTextEditorCommand('extension.extension-api.window.tabGroups', () => {
      API.window.tabGroups();
    }),
    commands.registerTextEditorCommand('extension.extension-api.window.terminals', () => {
      API.window.terminals();
    }),
    commands.registerTextEditorCommand('extension.extension-api.window.visibleNotebookEditors', () => {
      API.window.visibleNotebookEditors();
    }),
    commands.registerTextEditorCommand('extension.extension-api.window.visibleTextEditors', () => {
      API.window.visibleTextEditors();
    }),
    commands.registerTextEditorCommand('extension.extension-api.window.setStatusBarMessage', async () => {
      await API.window.setStatusBarMessage();
    }),
    commands.registerTextEditorCommand('extension.extension-api.window.showErrorMessage', async () => {
      await API.window.showErrorMessage();
    }),
    commands.registerTextEditorCommand('extension.extension-api.window.showInformationMessage', async () => {
      await API.window.showInformationMessage();
    }),
    commands.registerTextEditorCommand('extension.extension-api.window.showInputBox', async () => {
      await API.window.showInputBox();
    }),
    commands.registerTextEditorCommand('extension.extension-api.window.showOpenDialog', async () => {
      await API.window.showOpenDialog();
    }),
    commands.registerTextEditorCommand('extension.extension-api.window.showQuickPick', async () => {
      await API.window.showQuickPick();
    }),
    commands.registerTextEditorCommand('extension.extension-api.window.showSaveDialog', async () => {
      await API.window.showSaveDialog();
    }),
    commands.registerTextEditorCommand('extension.extension-api.window.showWarningMessage', async () => {
      await API.window.showWarningMessage();
    }),
    commands.registerTextEditorCommand('extension.extension-api.window.showWorkspaceFolderPick', async () => {
      await API.window.showWorkspaceFolderPick();
    })
  );

  // Workspace API
  context.subscriptions.push(
    commands.registerTextEditorCommand('extension.extension-api.workspace.fs', () => {
      API.workspace.fs();
    }),
    commands.registerTextEditorCommand('extension.extension-api.workspace.isTrusted', () => {
      API.workspace.isTrusted();
    }),
    commands.registerTextEditorCommand('extension.extension-api.workspace.name', () => {
      API.workspace.name();
    }),
    commands.registerTextEditorCommand('extension.extension-api.workspace.notebookDocuments', () => {
      API.workspace.notebookDocuments();
    }),
    commands.registerTextEditorCommand('extension.extension-api.workspace.rootPath', () => {
      API.workspace.rootPath();
    }),
    commands.registerTextEditorCommand('extension.extension-api.workspace.textDocuments', () => {
      API.workspace.textDocuments();
    }),
    commands.registerTextEditorCommand('extension.extension-api.workspace.workspaceFile', () => {
      API.workspace.workspaceFile();
    }),
    commands.registerTextEditorCommand('extension.extension-api.workspace.workspaceFolders', () => {
      API.workspace.workspaceFolders();
    }),
    commands.registerTextEditorCommand('extension.extension-api.workspace.asRelativePath', () => {
      API.workspace.asRelativePath();
    }),
    commands.registerTextEditorCommand('extension.extension-api.workspace.getConfiguration', () => {
      API.workspace.getConfiguration();
    }),
    commands.registerTextEditorCommand('extension.extension-api.workspace.getWorkspaceFolder', () => {
      API.workspace.getWorkspaceFolder();
    }),
    commands.registerTextEditorCommand('extension.extension-api.workspace.openNotebookDocument', async () => {
      await API.workspace.openNotebookDocument();
    }),
    commands.registerTextEditorCommand('extension.extension-api.workspace.openTextDocument', async () => {
      await API.workspace.openTextDocument();
    }),
    commands.registerTextEditorCommand('extension.extension-api.workspace.saveAll', async () => {
      await API.workspace.saveAll();
    })
  );
}
