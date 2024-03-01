import { l10n } from 'vscode';
import channel from '../channel'

export default {
  bundle(): void {
    channel.log(l10n.bundle);
  },

  uri(): void {
    channel.log(l10n.uri);
  },
}
