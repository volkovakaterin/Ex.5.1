/* eslint-disable linebreak-style */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-operators */
class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    if (typeof this.name !== 'string' || this.name.length < 2 || this.name.length > 10) {
      throw new Error('Ошибка');
    }
    this.type = type;
    if (this.type !== 'Bowman' && this.type !== 'Swordsman' && this.type !== 'Magician' && this.type !== 'Daemon' && this.type !== 'Undead' && this.type !== 'Zombie') {
      throw new Error('Ошибка');
    }
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}

class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman', 100, 1, 25, 25);
  }
}
class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman', 100, 1, 40, 10);
  }
}
class Magician extends Character {
  constructor(name) {
    super(name, 'Magician', 100, 1, 10, 40);
  }
}
class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon', 100, 1, 10, 40);
  }
}
class Undead extends Character {
  constructor(name) {
    super(name, 'Undead', 100, 1, 25, 25);
  }
}
class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie', 100, 1, 40, 10);
  }
}

const bowman = new Bowman('Bowman');
const swordsman = new Swordsman('Swordsman');
const magician = new Magician('Magician');
const daemon = new Daemon('Daemon');
const undead = new Undead('Undead');
const zombie = new Zombie('Zombie');
