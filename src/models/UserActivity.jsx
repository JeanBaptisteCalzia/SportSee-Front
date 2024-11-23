/**
 * Represents a data modeling class for user activity.
 */
export class UserActivity {
  constructor(data) {
    this.data = data;
    this.activity = data[0].sessions.map((session, index) => ({
      kilogram: session.kilogram,
      calories: session.calories,
      day: (index + 1).toString(),
    }));
  }
}
