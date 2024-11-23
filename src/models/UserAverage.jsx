/**
 * Represents a data modeling class for user average.
 */
export class UserAverage {
  constructor(data) {
    this.week = ["L", "M", "M", "J", "V", "S", "D"];
    this.data = data[0].sessions.map((session, index) => ({
      sessionLength: session.sessionLength,
      day: this.week[index],
    }));
  }
}
