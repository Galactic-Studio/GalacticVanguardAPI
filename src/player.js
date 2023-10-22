const object  = require("./object.js")
exports.Player = class {
    constructor(_playerId, _playerUsername) {

        this.playerId = _playerId;
        this.playerUsername =_playerUsername;
    }
}