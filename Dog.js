var chalk=require('chalk');
function Dog()
{
	this.stomach=[];
}
Dog.prototype.eat=function(cat){
	this.stomach.push(cat);
}
Dog.prototype.sayHi=function(){
	console.log("sayHi! I am Nhat"+chalk.red(this.name));
}
module.exports=Dog;