const pModule = require("./player")
const fs = require("fs")
const jsonFile = require("jsonfile")
const path = require("path")
const defaultJson = jsonFile.readFile(path.resolve(__dirname, "..","serverInfo.json"))
const {Object}  = require("./object.js")
exports.Server = class {
    players =  {}
    serverId;
    serverVersion;
    serverDir;

    constructor(_serverName, _serverRegion, _planet, _time, _isPreview) {
        this.serverName = _serverName;
        this.serverRegion = _serverRegion;
        this.planet = _planet;
        this.time = _time;
        this.isDev = _isPreview
    }

    playersInSever() {
        return this.players;
    }

    getPlayer(playerName) {
        for (let i = 0; i >= this.players.length(); i++) {
            let currentPlayer = this.players[i]
            if (currentPlayer.playerUsername === playerName) {
                return currentPlayer;
            }
        }
    }
    get serverId(){
        return this.serverId
    }

    addPlayerToServer(player){
        this.players[this.players.length+1] = player;
    }
    async startServer(){
        let serverData = await jsonFile.readFile(path.resolve(__dirname, "..", "serverInfo.json"))
        console.log("Server Starting")
        this.serverId = serverIdGenerator()
        console.log(this.serverId)
        let serverDir = createServerFolder(this.serverId)
        serverData.serverId = this.serverId
        serverData.region = this.serverRegion
        serverData.players = []
        serverData.planet = this.planet
        serverData.isDev = this.isDev
        fs.writeFile(path.resolve(serverDir, "serverInfo.json"), JSON.stringify(serverData), function (err, file) {
            if (err) throw err;
            console.log('Saved!');
        });

    }
}

var serverIdLength = 6 //TODO: Update for longer IDs
function serverIdGenerator() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < serverIdLength) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
function createServerFolder(severId){
    try {
        const directoryPath = path.resolve(__dirname, '..', 'servers', severId);
        fs.mkdirSync(directoryPath, {recursive: true});
        console.log('Directory created successfully');
        console.log(directoryPath)
        return directoryPath
    } catch (err) {
        console.error('Error creating directory:', err);
        return null
    }
}
function updateFirebase (){

}