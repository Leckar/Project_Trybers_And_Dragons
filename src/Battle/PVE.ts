import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _enemies: SimpleFighter[];
  constructor(player: Fighter, enemies: SimpleFighter[]) {
    super(player);
    this._enemies = enemies;
  }

  PVEFight(): void {
    let enemyIndex = 0;
    while (this.player.lifePoints !== -1) {
      this.player.attack(this._enemies[enemyIndex]);
      this._enemies[enemyIndex].attack(this.player);
      if (this._enemies[enemyIndex].lifePoints === -1) {
        enemyIndex += 1;
      }
      if (this._enemies.every(({ lifePoints }) => lifePoints === -1)) break;
    }
  }

  fight(): number {
    this.PVEFight();
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}