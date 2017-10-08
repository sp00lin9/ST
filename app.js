const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

var APP_DIR = '/app/';
var ASSET_DIR = '/app/assets/';
var ICON_DIR = '/src/assets/Icons';

let win;

function createWindow(){
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: false,
    icon: path.join(__dirname, ICON_DIR, 'SwapTrade.png'),
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true
  }));
}

app.on('ready', createWindow);

app.on ('window-all-closed', () => {
  if(process.platform !== 'darwin'){
    app.quit();
  }

});
