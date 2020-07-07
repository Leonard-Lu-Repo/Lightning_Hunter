module objects {
    export class Background extends createjs.Bitmap {
        // Variables
        private speedAlpha:number=0.005;
        // Constructor
        constructor(assetManager:createjs.LoadQueue,imageString:string,x:number=0,y:number=0,alpha:number=1)
        {
            
            super(assetManager.getResult(imageString));
            this.x=x;
            this.y=y;
            this.alpha=alpha;
            this.Start();
        }
        // Functions
        public Start():void {
            
        }
        public Update():void {
            this.Move();
        }
        public Reset():void {
           
        }
        public Move():void{
            this.alpha  +=this.speedAlpha;
        }
      
    }
}