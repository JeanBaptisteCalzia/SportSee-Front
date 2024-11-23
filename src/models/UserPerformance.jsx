/**
 * Represents a data modeling class for user performance.
 */
export class UserPerformance {
  constructor(data) {
    this.kind = Object.values(data[0].kind).map((item) => this.convert(item));
    this.performance = data[0].data
      .map((item, index) => ({
        value: item.value,
        kind: this.kind[index],
      }))
      .reverse();
  }
  convert = (string) => {
    let translation = string;
    switch (translation) {
      case "cardio":
        translation = "Cardio";
        break;
      case "energy":
        translation = "Énergie";
        break;
      case "endurance":
        translation = "Endurance";
        break;
      case "strength":
        translation = "Force";
        break;
      case "speed":
        translation = "Vitesse";
        break;
      case "intensity":
        translation = "Intensité";
        break;
      default:
    }
    return translation;
  };
}
