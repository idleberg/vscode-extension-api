import { commands, window } from "vscode";
import channel from "../channel";

export default {
	async executeCommand(): Promise<void> {
		const commandFilter = await window.showQuickPick([
			"all commands",
			"filter internal commands",
		]);
		const allCommands = await commands.getCommands(
			commandFilter === "filter internal commands",
		);
		const pick = await window.showQuickPick(allCommands);

		if (!pick) return;

		channel.log(`Executing command: ${pick}`);

		await commands.executeCommand(pick);
	},

	async getCommands(): Promise<void> {
		const pick = await window.showQuickPick([
			"all commands",
			"filter internal commands",
		]);

		if (!pick) return;

		const allCommands = await commands.getCommands(
			pick === "all commands" ? false : true,
		);

		channel.log(allCommands.sort());
	},
};
