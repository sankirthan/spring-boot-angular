@echo off
cd /d %~dp0%
setlocal
set PATH=%~dp0node/;%PATH%
node node_modules/@angular/cli/bin/ng %*
@echo on