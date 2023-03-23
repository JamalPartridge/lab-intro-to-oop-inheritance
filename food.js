// Create class below
class food {
    constructor(name, daysToSpoil, fresh = true){
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = fresh;
    }
    prepare(){
        console.log(`${this.name} is being prepared`)
    }
    isFresh(){
        if(this.daysToSpoil >= 1){
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
        } else {
            console.log(`${this.name} has spoiled.`)
        }
    }
    aDayPasses(){
        this.daysToSpoil--;
        this.isFresh();
    }
}

// const steak = new Food("steak", 2, true)
// console.log(steak.prepare())
// console.log(steak.isFresh())


// Do not edit below this line
module.exports = Food;