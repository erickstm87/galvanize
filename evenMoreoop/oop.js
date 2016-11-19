class Monepok {
  constructor(name,type,battleStats){
    this.name = name;
    this.type = type;
    this.battleStats = battleStats;
    this.hp = battleStats['maxHp'];
  }
}

class Shield {
  constructor(strength){
    this.strength = strength;
  }
}

class Weapon {
  constructor(name,strength){
    this.name = name;
    this.strength = strength;
  }
}

var billybob = new Monepok('billybob','fire',{maxHp: 90, attack: 40});
console.log(billybob['hp']);
