const {app,BrowserWindow,ipcMain,Menu}=require("electron");const path=require("path");
function create(){const w=new BrowserWindow({width:1280,height:800,minWidth:900,minHeight:600,title:"Drumcorps Tycoon",backgroundColor:"#5db8f5",
webPreferences:{preload:path.join(__dirname,"preload.js"),contextIsolation:true,nodeIntegration:false}});Menu.setApplicationMenu(null);w.loadFile("index.html")}
app.whenReady().then(create);ipcMain.on("quit",()=>app.quit());app.on("window-all-closed",()=>app.quit());
