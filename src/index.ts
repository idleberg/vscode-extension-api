import vscode from 'vscode';
import API from './api';

async function activate(context: vscode.ExtensionContext): Promise<void> {

  // Commands API
  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.commands.executeCommand', async () => {
      await API.commands.executeCommand();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.commands.getCommands', async () => {
      await API.commands.getCommands();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.configuration.getConfiguration', async () => {
      await API.configuration.getConfiguration();
    })
  );

  // Debug API
  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.debug.activeDebugConsole', () => {
      API.debug.activeDebugConsole();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.debug.activeDebugSession', () => {
      API.debug.activeDebugSession();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.debug.breakpoints', () => {
      API.debug.breakpoints();
    })
  );

  // Env API
  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.env', () => {
      API.env._();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.env.appHost', () => {
      API.env.appHost();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.env.appName', () => {
      API.env.appName();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.env.appRoot', () => {
      API.env.appRoot();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.env.clipboard', () => {
      API.env.clipboard();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.env.isNewAppInstall', () => {
      API.env.isNewAppInstall();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.env.isTelemetryEnabled', () => {
      API.env.isTelemetryEnabled();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.env.language', () => {
      API.env.language();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.env.logLevel', () => {
      API.env.logLevel();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.env.machineId', () => {
      API.env.machineId();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.env.remoteName', () => {
      API.env.remoteName();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.env.sessionId', () => {
      API.env.sessionId();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.env.shell', () => {
      API.env.shell();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.env.uiKind', () => {
      API.env.uiKind();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.env.uriScheme', () => {
      API.env.uriScheme();
    })
  );

  // Extensions API
  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.extensions.all', async () => {
      await API.extensions.all();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.extensions.getExtension', async () => {
      await API.extensions.getExtension();
    })
  );

  // L10n API
  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.l10n.bundle', async () => {
      API.l10n.bundle();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.l10n.uri', async () => {
      API.l10n.uri();
    })
  );

  // Tasks API
  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.tasks.fetchTasks', async () => {
      API.tasks.fetchTasks();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.tasks.taskExecutions', () => {
      API.tasks.taskExecutions();
    })
  );

  // Window API
  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.activeColorTheme', () => {
      API.window.activeColorTheme();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.activeNotebookEditor', () => {
      API.window.activeNotebookEditor();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.activeTerminal', () => {
      API.window.activeTerminal();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.activeTextEditor', () => {
      API.window.activeTextEditor();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.state', () => {
      API.window.state();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.tabGroups', () => {
      API.window.tabGroups();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.terminals', () => {
      API.window.terminals();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.visibleNotebookEditors', () => {
      API.window.visibleNotebookEditors();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.visibleTextEditors', () => {
      API.window.visibleTextEditors();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.setStatusBarMessage', async () => {
      await API.window.setStatusBarMessage();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.showErrorMessage', async () => {
      await API.window.showErrorMessage();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.showInformationMessage', async () => {
      await API.window.showInformationMessage();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.showInputBox', async () => {
      await API.window.showInputBox();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.showOpenDialog', async () => {
      await API.window.showOpenDialog();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.showQuickPick', async () => {
      await API.window.showQuickPick();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.showSaveDialog', async () => {
      await API.window.showSaveDialog();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.showWarningMessage', async () => {
      await API.window.showWarningMessage();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.window.showWorkspaceFolderPick', async () => {
      await API.window.showWorkspaceFolderPick();
    })
  );

  // Workspace API
  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.extension-api.workspace.fs', () => {
      API.workspace.fs();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.workspace.isTrusted', () => {
      API.workspace.isTrusted();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.workspace.name', () => {
      API.workspace.name();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.workspace.notebookDocuments', () => {
      API.workspace.notebookDocuments();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.workspace.rootPath', () => {
      API.workspace.rootPath();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.workspace.textDocuments', () => {
      API.workspace.textDocuments();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.workspace.workspaceFile', () => {
      API.workspace.workspaceFile();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.workspace.workspaceFolders', () => {
      API.workspace.workspaceFolders();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.workspace.asRelativePath', () => {
      API.workspace.asRelativePath();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.workspace.getConfiguration', () => {
      API.workspace.getConfiguration();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.workspace.getWorkspaceFolder', () => {
      API.workspace.getWorkspaceFolder();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.workspace.openNotebookDocument', async () => {
      await API.workspace.openNotebookDocument();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.workspace.openTextDocument', async () => {
      await API.workspace.openTextDocument();
    }),
    vscode.commands.registerTextEditorCommand('extension.extension-api.workspace.saveAll', async () => {
      await API.workspace.saveAll();
    })
  );
}

export { activate };
