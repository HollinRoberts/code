var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr: number[] = [1,2,3,4];
var myObj= { name:'Bill'};
var anythingVariable: any = "Hey";
var anythingVariable: any = 25; 
var arrayOne: boolean[] = [true, false, true, true]; 
var arrayTwo = [1, 'abc', true, 2];
var myObj1 = { x: 5, y: 10 };
// object constructor
var MyNode = (function () {
    function MyNode(val:number) {
        this.val = 0;
        this.val = val;
    }
    MyNode.prototype.doSomething = function (): void{
        this._priv = 10;
    };
    return MyNode;
}());
var myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);
function myFunction() {
    console.log("Hello World");
    return;
}
function sendingErrors():never {
	throw new Error('Error message');
}
