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
    var GameOverScene = /** @class */ (function (_super) {
        __extends(GameOverScene, _super);
        // Constructor
        function GameOverScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Method
        GameOverScene.prototype.Start = function () {
            // Initialize our variables
            this.background = new objects.Background(this.assetManager, "background");
            //Hold play scene's reaction time
            this.result = scenes.PlayScene.prototype.reactionTime;
            this.excellentLabel = new objects.Label("Your reaction time:", "40px", "Perfect dark", "#fb149e", 600, 240, true);
            this.resultLabel = new objects.Label(this.result.toString() + " ms", "40px", "Digital dream", "#fb149e", 600, 300, true);
            this.mainBtn = new objects.Button(this.assetManager, "mainBtn", 500, 500);
            this.replayBtn = new objects.Button(this.assetManager, "replayBtn", 450, 600);
            this.Main();
            console.log("Play scenes reaction time: " + scenes.PlayScene.prototype.reactionTime);
            console.log("Start scenes running time: " + scenes.StartScene.prototype.startRunTime);
        };
        GameOverScene.prototype.Update = function () { };
        GameOverScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.excellentLabel);
            this.addChild(this.resultLabel);
            this.addChild(this.mainBtn);
            this.addChild(this.replayBtn);
            this.mainBtn.on("click", this.mainBtnClick);
            this.replayBtn.on("click", this.replayBtnClick);
        };
        GameOverScene.prototype.mainBtnClick = function () {
            objects.Game.currentScene = config.Scene.START;
        };
        GameOverScene.prototype.replayBtnClick = function () {
            objects.Game.currentScene = config.Scene.GAME;
            //Update start scene's run time to the latest time
            scenes.StartScene.prototype.startRunTime = Math.round(createjs.Ticker.getTime());
            console.log("Start scenes running time: " + scenes.StartScene.prototype.startRunTime);
        };
        return GameOverScene;
    }(objects.Scene));
    scenes.GameOverScene = GameOverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map