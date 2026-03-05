import { debug } from 'vscode';
import channel from '../channel.ts';

export default {
	activeDebugConsole(): void {
		channel.log(debug.activeDebugConsole, 'activeDebugConsole');
	},

	activeDebugSession(): void {
		channel.log(debug.activeDebugSession, 'activeDebugSession');
	},

	breakpoints(): void {
		channel.log(debug.breakpoints, 'breakpoints');
	},
};
