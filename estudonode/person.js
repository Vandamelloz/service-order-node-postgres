class Person{
    constructor(name){
        this.name = name;
    }
    sayHello(){
        console.log(`Hello, my name is ${this.name}`);
    }
}
//Exportando objeto de Person
module.exports = {
    Person,
};
