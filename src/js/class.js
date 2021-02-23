/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-operators */
/* eslint-disable linebreak-style */
class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    if (typeof this.name !== 'string' || this.name < 2 || this.name > 10) {
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


  // eslint-disable-next-line consistent-return
  levelUp() {
    if (this.health !== 0) {
      this.level += 1;
      this.attack += (this.attack / 100 * 25);
      this.defence += (this.defence / 100 * 25);
      this.health = 100;
    } else { return new Error('Нельзя повысить уровень погибшего'); }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}

// eslint-disable-next-line import/prefer-default-export
export const Bowman = new Character('Bowman', 'Bowman', 100, 1, 25, 25);
export const Swordsman = new Character('Swordsman', 'Swordsman', 100, 1, 40, 10);
export const Magician = new Character('Magician', 'Magician', 100, 1, 10, 40);
const Daemon = new Character('Daemon', 'Daemon', 100, 1, 10, 40);
const Undead = new Character('Undead', 'Undead', 100, 1, 25, 25);
const Zombie = new Character('Zombie', 'Zombie', 100, 1, 40, 10);
