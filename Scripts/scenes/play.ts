module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private playBackground: objects.Background;
        private lightningBtn:objects.Button;

        // random x and random y to locate button's x and y
        private randomX:number;
        private randomY:number;
        private timeLable:objects.Label;

        // Play scnene's prototype property name
        public  reactionTime;
        public  playRuntime;

        // Hold the difference of start scene run time and play scene run time
        public  substractTime:number;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }

        public Start():void {
            // Inintialize our variables
                this.generateRandomNumber();
                this.playBackground = new objects.Background(this.assetManager,"playBackground");
                this.lightningBtn = new objects.Button(this.assetManager,"lightning",this.randomX,this.randomY);
                console.log("Random X: "+this.randomX+" "+"Random Y: "+this.randomY);
                this.Main();
                console.log("Start scenes running time: " +scenes.StartScene.prototype.startRunTime);
        }

        public Update():void {

            //get updated run time of play scene
            this.runtime=Math.round(createjs.Ticker.getTime());

            this.substractTime=this.runtime-scenes.StartScene.prototype.startRunTime;
            console.log(this.substractTime);

            //set play scene's prototype property 
            PlayScene.prototype.playRuntime=this.runtime;
            PlayScene.prototype.reactionTime=this.substractTime;

            this.timeLable=new objects.Label(this.substractTime.toString()+" ms","40px","Digital dream","#fb149e",900,50);

            this.Main();
            
        }


        public Main():void {
            this.removeAllChildren();
            this.addChild(this.playBackground);
            this.addChild(this.lightningBtn);
            this.addChild(this.timeLable);
            
            // Register for click events
            this.lightningBtn.on("click", this.lightningBtnClick);
           

        }

        // lightning button click event function
        private lightningBtnClick():void {

            objects.Game.currentScene = config.Scene.OVER;
            console.log("Play scenes reaction time: "+PlayScene.prototype.reactionTime);
            console.log("Play scenes run time: "+PlayScene.prototype.playRuntime);
        }

        // generate random number and set them to random x, random y
        private generateRandomNumber():void{
            this.randomX=Math.round(Math.random()*1000) ;
            this.randomY=Math.round(Math.random()*452);
            
        }
    }
}