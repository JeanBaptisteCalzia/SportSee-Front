/**
 * Represents a data modeling class for user data.
 */
export class UserData {
  constructor(data) {
    this.firstName = data[0].userInfos.firstName;
    this.calorieCount = data[0].keyData.calorieCount;
    this.proteinCount = data[0].keyData.proteinCount;
    this.carbohydrateCount = data[0].keyData.carbohydrateCount;
    this.lipidCount = data[0].keyData.lipidCount;
    this.todayScore = data[0].todayScore || data[0].score;
    this.score = this.todayScore * 100;
  }
}
