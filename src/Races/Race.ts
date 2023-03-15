export default abstract class Race {
  private static _instances = 0;
  constructor(
    private _name: string,
    private _dexterity: number,
  ) {
    Race._instances += 1;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  public static createdRacesInstances(): number {
    return Race._instances;
  }

  abstract get maxLifePoints(): number;
}