import vscode from 'vscode';

export default {
  outputChannel: vscode.window.createOutputChannel('Extension API'),

  clear(): void {
    this.outputChannel.clear();
  },

  dispose(): void {
    this.outputChannel.dispose();
  },

  log(input: unknown, key = ''): void {
    this.clear();


    if (input && key?.length) {
      this.outputChannel.append(
        JSON.stringify({
          [key]: input
        }, null, 4)
      );
    } else {
      this.outputChannel.appendLine(
        JSON.stringify(input, null, 4)
      );
    }

    this.show();
  },

  hide():void {
    this.outputChannel.hide();
  },

  show(preserveFocus = false):void {
    this.outputChannel.show(preserveFocus);
  }
}
