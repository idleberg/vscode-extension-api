import { extensions, window } from "vscode";
import channel from "../channel";

function mapExtensions() {
	return extensions.all
		.map((extension) => {
			return {
				extensionKind: extension.extensionKind,
				extensionPath: extension.extensionPath,
				extensionUri: extension.extensionUri,
				id: extension.id,
				isActive: extension.isActive,
				packageJSON: extension.packageJSON,
			};
		})
		.sort((a, z) => {
			return a.id.toLowerCase() > z.id.toLowerCase() ? 1 : -1;
		});
}

export default {
	async all(): Promise<void> {
		const extensions = mapExtensions();

		channel.log(extensions);
	},

	async getExtension(): Promise<void> {
		const extensions = mapExtensions();
		const pick = await window.showQuickPick([
			...extensions.map((item) => item.id),
		]);

		if (pick) channel.log(extensions.filter((item) => item.id === pick)[0]);
	},
};
