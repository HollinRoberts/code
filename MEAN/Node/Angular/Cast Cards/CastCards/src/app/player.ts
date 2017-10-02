export class Player {
    constructor(
        public name:string=null,
        public health:number=10,
        public hasDrawn:boolean=true,
        public hand:number[]=[],
        ){}
}
