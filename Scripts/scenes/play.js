var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        // Constructor
        function PlayScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        PlayScene.prototype.Start = function () {
            // Inintialize our variables
            this.generateRandomNumber();
            this.playBackground = new objects.Background(this.assetManager, "playBackground");
            this.lightningBtn = new objects.Button(this.assetManager, "lightning", this.randomX, this.randomY);
            console.log("Random X: " + this.randomX + " " + "Random Y: " + this.randomY);
            this.Main();
            console.log("Start scenes running time: " + scenes.StartScene.prototype.startRunTime);
        };
        PlayScene.prototype.Update = function () {
            //get updated run time of play scene
            this.runtime = Math.round(createjs.Ticker.getTime());
            this.substractTime = this.runtime - scenes.StartScene.prototype.startRunTime;
            console.log(this.substractTime);
            //set play scene's prototype property 
            PlayScene.prototype.playRuntime = this.runtime;
            PlayScene.prototype.reactionTime = this.substractTime;
            this.timeLable = new objects.Label(this.substractTime.toString() + " ms", "40px", "Digital dream", "#fb149e", 900, 50);
            this.Main();
        };
        PlayScene.prototype.Main = function () {
            this.removeAllChildren();
            this.addChild(this.playBackground);
            this.addChild(this.lightningBtn);
            this.addChild(this.timeLable);
            // Register for click events
            this.lightningBtn.on("click", this.lightningBtnClick);
        };
        // lightning button click event function
        PlayScene.prototype.lightningBtnClick = function () {
            objects.Game.currentScene = config.Scene.OVER;
            console.log("Play scenes reaction time: " + PlayScene.prototype.reactionTime);
            console.log("Play scenes run time: " + PlayScene.prototype.playRuntime);
        };
        // generate random number and set them to random x, random y
        PlayScene.prototype.generateRandomNumber = function () {
            this.randomX = Math.round(Math.random() * 1000);
            this.randomY = Math.round(Math.random() * 452);
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map