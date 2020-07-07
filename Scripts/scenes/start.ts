module scenes {
    export class StartScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private gameTitle: objects.Label;
        private startButton: objects.Button;
        private exitButton:objects.Button;
        private logo:objects.Background;

        //Start scene's prototype property name
        public startRunTime;
       

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }
        // Methods
        public Start():void {
            // Initialize our objects for this scene
            this.background = new objects.Background(this.assetManager,"background");
            this.gameTitle = new objects.Label("Lightning Hunter", "60px", "Perfect dark", "#fb149e", 590, 140, true);
            this.logo=new objects.Background(this.assetManager,"logo",520,300,0);

            // NOTE: PreloadJS manifest id
            this.startButton = new objects.Button(this.assetManager, "playBtn", 500, 500);
            this.exitButton=new objects.Button(this.assetManager,"exitBtn",510,600);

            this.Main();
        }

        public Update():void {
            this.logo.Update();
        }

        public Main():void {
            // Add items to the scene
            this.addChild(this.background);
            this.addChild(this.gameTitle);
            this.addChild(this.startButton);
            this.addChild(this.exitButton);
            this.addChild(this.logo);
            this.startButton.on("click", this.startButtonClick);
            
            //close game
            this.exitButton.on("click",function(){
                window.close();
            } );
        }

        private startButtonClick():void {
            // Change from START to GAME scene
            objects.Game.currentScene = config.Scene.GAME;

            //get start scene's run time
            this.runtime=Math.round(createjs.Ticker.getTime());

            //set start scene prototype 
            StartScene.prototype.startRunTime=this.runtime;
            console.log("Start scenes running time: "+StartScene.prototype.startRunTime);
        }
    }
}