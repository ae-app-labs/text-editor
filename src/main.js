// Transparancy only works on Windows if WDM is enabled
const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on("ready", _ =>{
  
    let win = new BrowserWindow({
      height: 400,
      width: 350,
		transparent: true,
		frame: false,
		toolbar: false
    });

    win.loadURL(`file://${__dirname}/editor.html`)

    win.on("closed", _ =>{
      mainWindow = null;
    })

});
