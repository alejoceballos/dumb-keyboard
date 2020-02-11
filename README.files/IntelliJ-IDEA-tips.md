# IntelliJ IDEA Tips

* [Getting rid of the annoying warning `Unresolved function or method describe` on your test files](#Getting-rid-of-the-annoying-warning-"Unresolved-function-or-method-describe"-on-your-test-files)
* [Styled Components Plugin](#styled-components-plugin)
* [ESLint Autofix Execution using File Watchers](#eslint-autofix-execution-using-file-watchers)
    * [On Windows](#on-windows)

### Getting rid of the annoying warning "Unresolved function or method describe" on your test files

* Select menu: `File` -> `Settings`
* Go to: `Languages & Frameworks` -> `Javascript` -> `Libraries`
* If `@types/jest` is on the list, check it! If not:
    * Press the `Download...` button
    * Wait until the list is loaded
    * Click on the list and type `jest` to find it among all the items in the list
    * Press `Download and Install`
    * After the download `@types/jest` must now be displayed in the check list 
    
### Styled Components Plugin

* Select menu: `File` -> `Settings`
* Go to: `Plugins`
    * Select `Marketplace` tab
    * Search for [Styled Components & Styled JSX](https://plugins.jetbrains.com/plugin/9997-styled-components--styled-jsx "Styled Components & Styled JSX")
    * Press install on the corresponding item
    
### ESLint Autofix Execution using File Watchers
#### On Windows

**NOTE:** If you are using IntelliJ IDEA on Windows, but your project resides in the Ubuntu system through Windows 
Subsystem for Linux (WSL), you will have to install some ESLint libraries globally. If that's not your case, you may 
skip to the IntelliJ settings.
 
Opening a terminal (cmd or PowerShell):
```shell script
npm install -g eslint-plugin-node@latest
npm install -g eslint-plugin-promise@latest
npm install -g eslint-plugin-standard@latest

```
On IntelliJ IDEA:
* Select menu: `File` -> `Settings` -> `Tools` -> `File Watchers` -> `Add`
* Set the following values:
    * Name: ESLint
    * File Type: JavaScript
    * Scope: Current File
    * Program: C:\Users[username]\AppData\Roaming\npm\eslint
    * Arguments: --fix $FilePath$
    * Output paths to refresh: $FileDir$
    * Working directory: C:\Users[username]\AppData\Roaming\npm
    * Uncheck Auto-save edited files to trigger the watcher
    * Uncheck Trigger the watcher on external changes
