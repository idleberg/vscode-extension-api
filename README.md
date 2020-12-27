# Extension API

[![The MIT License](https://flat.badgen.net/badge/license/MIT/orange)](http://opensource.org/licenses/MIT)
[![GitHub](https://flat.badgen.net/github/release/idleberg/vscode-extension-api)](https://github.com/idleberg/vscode-extension-api/releases)
[![Visual Studio Marketplace](https://vsmarketplacebadge.apphb.com/installs-short/idleberg.extension-api.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=idleberg.extension-api)
[![CircleCI](https://flat.badgen.net/circleci/github/idleberg/vscode-extension-api)](https://circleci.com/gh/idleberg/vscode-extension-api)
[![David](https://flat.badgen.net/david/dep/idleberg/vscode-extension-api)](https://david-dm.org/idleberg/vscode-extension-api)

A simple helper aimed at externsion developers. Logs Extension API results to the output channel.

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
$ code --install-extension path/to/nsis-*.vsix
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

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT)
