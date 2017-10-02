export class Result {
    constructor(
        public dealt:number=null,
        public healed:number=null,
        public aiDealt:number=null,
        public aiHealed:number=null,
        public msg:string='',
        public divClass:string=result,
        ){}
}
