import vscode from 'vscode';
import channel from '../channel'

export default {
  activeDebugConsole(): void {
    channel.log(vscode.debug.activeDebugConsole, 'activeDebugConsole');
  },

  activeDebugSession(): void {
    channel.log(vscode.debug.activeDebugSession, 'activeDebugSession');
  },

  breakpoints(): void {
    channel.log(vscode.debug.breakpoints, 'breakpoints');
  }
}
