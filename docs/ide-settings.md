Schritte um die JSON-Datei zu bearbeiten:

- Strg + p
- Eintippen >settings
- Öffnen von Preferences: Open Settings (JSON)
- Unten die Einstellungen hinzufügen/ersetzten (vlt noch vorher ein Backup von den eigenen Einstellungen)

Hier ist meine settings.json:

{
"workbench.iconTheme": "vscode-icons",
"editor.fontSize": 18,
"editor.tabSize": 1,
"editor.fontFamily": "'Fira Code',Consolas, 'Courier New', monospace",
"editor.fontLigatures": true,
"indentRainbow.colors": [
"rgba(255,255,64,0.07)",
"rgba(127,255,127,0.07)",
"rgba(255,127,255,0.07)",
"rgba(79,236,236,0.07)"
],
"indentRainbow.ignoreLinePatterns": ["/[ \t]_ [_]/g", "/[ \t]+[/]{2}/g"],
"explorer.confirmDelete": false,
"color-highlight.languages": ["*"],
"color-highlight.matchWords": true,
"editor.formatOnSave": true,
"vsicons.dontShowNewVersionMessage": true,
"editor.defaultFormatter": "esbenp.prettier-vscode",
"emmet.includeLanguages": {
"javascript": "html"
},
"prettier.singleQuote": true,
"prettier.jsxSingleQuote": true,
"workbench.editorAssociations": {
"\*.ipynb": "jupyter.notebook.ipynb"
},
"jupyter.textOutputLimit": 0,
"python.languageServer": "Pylance",
"workbench.startupEditor": "welcomePage",
"editor.suggestSelection": "first",
"vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
"javascript.updateImportsOnFileMove.enabled": "always",
"typescript.updateImportsOnFileMove.enabled": "always",
"workbench.colorTheme": "One Dark Pro",
"[prisma]": {
"editor.defaultFormatter": "Prisma.prisma"
},
"typescript.preferences.importModuleSpecifier": "relative",
"redhat.telemetry.enabled": false,
"explorer.compactFolders": false,
"terminal.integrated.defaultProfile.windows": "GitBash",
"terminal.integrated.profiles.windows": {
"PowerShell": {
"source": "PowerShell",
"icon": "terminal-powershell"
},
"Command Prompt": {
"path": [
"${env:windir}\\Sysnative\\cmd.exe",
"${env:windir}\\System32\\cmd.exe"
],
"args": [],
"icon": "terminal-cmd"
},
"GitBash": {
"source": "Git Bash",
"path": ["C:\\Program Files\\Git\\bin\\bash.exe"],
"icon": "terminal-bash"
}
},
"markdown.extension.toc.updateOnSave": false,
"eslint.alwaysShowStatus": true,
"eslint.nodePath": "C:\\Program Files\\nodejs",
"bracketPairColorizer.depreciation-notice": false,
"bracket-pair-colorizer-2.depreciation-notice": false,
"[python]": {
"editor.defaultFormatter": null,
"editor.insertSpaces": true,
"editor.tabSize": 2
},
"python.formatting.provider": "black",
"python.formatting.blackArgs": ["--line-length", "79"]
}
