class Mammal{
    constructor(name){
        this.name=name;
        this.type="warm-blooded";
    }
}
class Dog extends Mammal{
    constructor(name){
        super(name);
    }
    bark(){
        console.log("woff.....");
    }
}