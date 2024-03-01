import { env } from 'vscode';
import channel from '../channel'

export default {
  _(): void {
    channel.log(env);
  },

  appHost(): void {
    channel.log(env.appHost, 'env.appHost');
  },

  appName(): void {
    channel.log(env.appName, 'env.appName');
  },

  appRoot(): void {
    channel.log(env.appRoot, 'env.appRoot');
  },

  clipboard(): void {
    channel.log(env.clipboard, 'env.clipboard');
  },

  isNewAppInstall(): void {
    channel.log(env.isNewAppInstall, 'env.isNewAppInstall');
  },

  isTelemetryEnabled(): void {
    channel.log(env.isTelemetryEnabled, 'env.isTelemetryEnabled');
  },

  language(): void {
    channel.log(env.language, 'env.language');
  },

  logLevel(): void {
    channel.log(env.logLevel, 'env.logLevel');
  },

  machineId(): void {
    channel.log(env.machineId, 'env.machineId');
  },

  remoteName(): void {
    channel.log(env.remoteName, 'env.remoteName');
  },

  sessionId(): void {
    channel.log(env.sessionId, 'env.sessionId');
  },

  shell(): void {
    channel.log(env.shell, 'env.shell');
  },

  uiKind(): void {
    channel.log(env.uiKind, 'env.uiKind');
  },

  uriScheme(): void {
    channel.log(env.uriScheme, 'env.uriScheme');
  },
}
