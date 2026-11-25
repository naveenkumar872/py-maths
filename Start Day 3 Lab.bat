@echo off
title Day 3 Maths Lab
cd /d "%~dp0"
echo.
echo   Day 3 Maths Lab: Lists, Functions and the math Module
echo   -----------------------------------------------------
echo   Opening http://localhost:8000 in your browser.
echo   Keep this window open while you use the lab. Close it when you finish.
echo.

set "PY="
where python >nul 2>nul && set "PY=python"
if not defined PY where py >nul 2>nul && set "PY=py"
if not defined PY (
  echo   Python is not installed on this computer.
  echo   Install it from https://www.python.org/downloads/ ^(tick "Add python.exe to PATH"^),
  echo   or use the Render link instead.
  echo.
  pause
  exit /b 1
)

start "" cmd /c "timeout /t 2 /nobreak >nul & start http://localhost:8000"
%PY% -m http.server 8000
