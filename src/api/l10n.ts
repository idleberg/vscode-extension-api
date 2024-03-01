import vscode from 'vscode';
import channel from '../channel'

export default {
  bundle(): void {
    channel.log(vscode.l10n.bundle);
  },

  uri(): void {
    channel.log(vscode.l10n.uri);
  },
}
