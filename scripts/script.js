class Creature{
    static number = 0;
    #id =  0;
    constructor(name, healthPoints, damage, armor){
        this.name = name;
        this.healthPoints = healthPoints;
        this.damage = damage;
        this.armor = armor>70 ? 0.7 : armor/10;
        this.#id = ++Creature.number;
    }
    get id(){
        return this.#id;
    }
    defeat(){
        alert(`${this.name} уничтожен!`);
    }
    info(){
        alert(
            `Имя: ${this.name}\n`+
            `Здоровье: ${this.healthPoints}\n`+
            `Урон: ${this.damage}\n`+
            `Броня: ${this.armor*10}\n`+
            `Номер существа: ${this.#id}`
        )
    }
}
class Player extends Creature{
    #lvl = 0;
    get lvl(){
        return this.#lvl;
    }
    attack(other){
        other.healthPoints -= (this.damage * other.armor);
        if(other.healthPoints <= 0){
            other.defeat();
            this.#lvl++;
            this.damage *= 0.05;
            return true;
        }
        return false;
    }
}
class Enemy extends Creature{
    attack(other){
        other.healthPoints -= (this.damage * other.armor);
        if(other.healthPoints <= 0){
            other.defeat();
            return true;
        }
        return false;
    }
}

var player = new Player('Garen', '1600', '190','40');
console.log(Creature.number);
var enemy = new Enemy('Darius', '1500', '215', '30');
console.log(Creature.number);
player.info();
enemy.info();
var flag = false;
alert(`Схватка между "${player.name}" и "${enemy.name}"`);
do
    if(player.attack(enemy) == true || enemy.attack(player) == true){
        flag = true;
    }
while(flag == false)