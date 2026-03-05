import { l10n } from 'vscode';
import channel from '../channel.ts';

export default {
	bundle(): void {
		channel.log(l10n.bundle);
	},

	uri(): void {
		channel.log(l10n.uri);
	},
};
