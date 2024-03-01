# Extension API

[![Version](https://img.shields.io/github/v/release/idleberg/vscode-extension-api?style=for-the-badge)](https://github.com/idleberg/vscode-extension-api/releases)
[![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/idleberg.extension-api?style=for-the-badge&label=Marketplace)](https://marketplace.visualstudio.com/items?itemName=idleberg.extension-api)
[![Open VSX Downloads](https://img.shields.io/open-vsx/dt/idleberg/extension-api?style=for-the-badge&label=Open%20VSX)](https://open-vsx.org/extension/idleberg/extension-api)
[![Build](https://img.shields.io/github/actions/workflow/status/idleberg/vscode-extension-api/default.yml?style=for-the-badge)](https://github.com/idleberg/vscode-extension-api/actions)

A simple helper aimed at extension developers. Logs Extension API results to the output channel.

## Installation

### Extension Marketplace

Launch Quick Open, paste the following command, and press <kbd>Enter</kbd>

`ext install idleberg.extension-api`

### CLI

With [shell commands](https://code.visualstudio.com/docs/editor/command-line) installed, you can use the following command to install the extension:

`$ code --install-extension idleberg.extension-api`

### Packaged Extension

Download the packaged extension from the the [release page](https://github.com/idleberg/vscode-extension-api/releases) and install it from the command-line:

```bash
$ code --install-extension path/to/extension-api*.vsix
```

Alternatively, you can download the packaged extension from the [Open VSX Registry](https://open-vsx.org/) or install it using the [`ovsx`](https://www.npmjs.com/package/ovsx) command-line tool:

```bash
$ ovsx get idleberg.extension-api
```

### Clone Repository

Change to your Visual Studio Code extensions directory:

```powershell
# Windows Powershell
cd $Env:USERPROFILES\.vscode\extensions

# Windows Command Prompt
$ cd %USERPROFILE%\.vscode\extensions
```

```bash
# Linux & macOS
$ cd ~/.vscode/extensions/
```

Clone repository as `idleberg.extension-api`:

```bash
$ git clone https://github.com/idleberg/vscode-extension-api idleberg.extension-api
```

Install dependencies:

```bash
cd idleberg.extension-api && npm install
```

## Usage

This extension exposes several commands prefixed with *Extension API*. For a full list, please refer to the *Feature Contributions* tab for the extension.

## Credits

Extension icon based on an [icon design](https://thenounproject.com/icon/extension-2985095/) by Sabri Ramadhani

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT).
