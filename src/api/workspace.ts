import { window, workspace } from "vscode";
import channel from "../channel";
import dotProp from "dot-prop";

export default {
	fs(): void {
		channel.log(workspace.fs);
	},

	isTrusted(): void {
		channel.log(workspace.isTrusted);
	},

	name(): void {
		channel.log(workspace.name);
	},

	notebookDocuments(): void {
		channel.log(workspace.notebookDocuments);
	},

	rootPath(): void {
		channel.log(workspace.rootPath);
	},

	textDocuments(): void {
		channel.log(workspace.textDocuments);
	},

	workspaceFile(): void {
		channel.log(workspace.workspaceFile);
	},

	workspaceFolders(): void {
		channel.log(workspace.workspaceFolders);
	},

	async asRelativePath(): Promise<void> {
		const input = await window.showInputBox();

		if (input) await workspace.asRelativePath(input);
	},

	async getConfiguration(): Promise<void> {
		const configuration = workspace.getConfiguration();
		const pick = await window.showInputBox({
			placeHolder:
				"Enter a configuration key in dot-prop notation, e.g. `editor.fontSize`",
		});

		if (!pick) return;

		if (dotProp.has(configuration, pick)) {
			channel.log(
				dotProp.get(configuration, pick),
				pick.includes(".") ? pick : "",
			);
		} else {
			channel.log(configuration);
		}
	},

	getWorkspaceFolder(): void {
		const editor = window.activeTextEditor;

		if (!editor) {
			window.showWarningMessage("No open editors");
			return;
		}

		const workspaceFolder = workspace.getWorkspaceFolder(editor?.document?.uri);

		if (!workspaceFolder?.uri?.fsPath?.length) {
			window.showWarningMessage("No open workspaces");
			return;
		}

		channel.log(workspaceFolder.uri.fsPath);
	},

	async openNotebookDocument(): Promise<void> {
		const input = await window.showInputBox();

		if (input) await workspace.openNotebookDocument(input);
	},

	async openTextDocument(): Promise<void> {
		const input = await window.showInputBox();

		if (input) await workspace.openTextDocument(input);
	},

	async saveAll(): Promise<void> {
		workspace.saveAll();
	},
};
