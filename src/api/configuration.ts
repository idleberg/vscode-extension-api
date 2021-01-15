import vscode from 'vscode';
import dotProp from 'dot-prop';
import channel from '../channel'

export default {
  async getConfiguration(): Promise<void> {
    const configuration = vscode.workspace.getConfiguration();
    const pick = await vscode.window.showInputBox({
      placeHolder: 'Enter a configuration key in dot-prop notation, e.g. `editor.fontSize`'
    });

    if (!pick) return;

    if (dotProp.has(configuration, pick)) {
      channel.log(dotProp.get(configuration, pick), pick.includes('.')
        ? pick
        : ''
      );
    } else {
      channel.log(configuration);
    }
  }
};
