EASIEST (no installs on your PC): upload this folder to a free GitHub repo. The Actions tab builds DrumcorpsTycoon.exe automatically; download it from the finished run's Artifacts.
OR on your PC: install Node.js, then double-click BUILD-EXE.bat. Result: dist\DrumcorpsTycoon.exe (single file, no install for players).

DRUMCORPS TYCOON - desktop build (Electron)
1. Install Node.js (nodejs.org).
2. In this folder run:  npm install
3. Test:                npm start
4. Build the .exe:      npm run dist   (outputs to the "dist" folder: a portable .exe and an installer)
Saves live in the app's user-data folder, so progress survives closing the game. Use the Save/Export button for backups.
itch.io: upload the dist .exe/installer (Windows), or upload the separate HTML5 zip and tick "This file will be played in the browser".
Steam: wrap this Electron app with Steamworks (e.g. steamworks.js) and upload via Steamworks SDK/SteamPipe.
Logos are (c) their corps and are included with permission; keep proof of permission for store reviews.
