module scenes {
    export class GameOverScene extends objects.Scene {
        // Variables
        private excellentLabel: objects.Label;
        private mainBtn: objects.Button;
        private replayBtn:objects.Button;
        private background:objects.Background;
        private result:number
        private resultLabel:objects.Label;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }

        // Method
        public Start():void {
            // Initialize our variables
            this.background=new objects.Background(this.assetManager,"background");

            //Hold play scene's reaction time
            this.result=PlayScene.prototype.reactionTime;
            this.excellentLabel = new objects.Label("Your reaction time:", "40px", "Perfect dark", "#fb149e", 600, 240, true);
            this.resultLabel=new objects.Label(this.result.toString()+" ms","40px", "Digital dream", "#fb149e", 600, 300, true)
            this.mainBtn = new objects.Button(this.assetManager, "mainBtn", 500,500);
            this.replayBtn=new objects.Button(this.assetManager,"replayBtn",450,600);
            this.Main();
            console.log("Play scenes reaction time: "+PlayScene.prototype.reactionTime);
            console.log("Start scenes running time: "+StartScene.prototype.startRunTime);
        }

        public Update():void {}

        public Main():void {
            this.addChild(this.background);
            this.addChild(this.excellentLabel);
            this.addChild(this.resultLabel);
            this.addChild(this.mainBtn);
            this.addChild(this.replayBtn);

            this.mainBtn.on("click", this.mainBtnClick);
            this.replayBtn.on("click",this.replayBtnClick);
        }

        private mainBtnClick():void {
            objects.Game.currentScene = config.Scene.START;
        }
        private replayBtnClick():void{
            objects.Game.currentScene=config.Scene.GAME;

            //Update start scene's run time to the latest time
            StartScene.prototype.startRunTime=Math.round(createjs.Ticker.getTime());
            
            console.log("Start scenes running time: "+StartScene.prototype.startRunTime);
        }
    }
}