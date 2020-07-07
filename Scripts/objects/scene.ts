module objects {
    export class Scene extends createjs.Container {
        // Variables
        public assetManager: createjs.LoadQueue;

        //Hold all scenes' runtime
        public runtime:number;
        // Constructor
        constructor(assetManager:createjs.LoadQueue)
        {
            super();

            this.assetManager = assetManager;
        }
        // Methods
        public Start():void {}
        public Update():void {}
        public Main():void {}
    }
}