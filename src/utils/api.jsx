import { userMainData } from "../datas/dataMocked";
import { userPerformance } from "../datas/dataMocked";
import { userAverageSessions } from "../datas/dataMocked";
import { userActivity } from "../datas/dataMocked";

const useApi = false;

export async function fetchUserMainData(userId) {
  if (!useApi) {
    return (
      userMainData &&
      userMainData.filter((user) => user.id === parseInt(userId))
    );
  } else {
    const response = await fetch(`http://localhost:3000/user/${userId}`);
    const responseData = await response.json();
    const arrayMainData = [];
    arrayMainData.push(responseData.data);
    const user =
      arrayMainData && arrayMainData.filter((id) => id.id === parseInt(userId));
    return user;
  }
}

export async function fetchUserPerformance(userId) {
  if (!useApi) {
    return (
      userPerformance &&
      userPerformance.filter((user) => user.userId === parseInt(userId))
    );
  } else {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/performance`
    );
    const responseData = await response.json();
    const arrayPerformance = [];
    arrayPerformance.push(responseData.data);
    return arrayPerformance;
  }
}

export async function fetchUserAverageSessions(userId) {
  if (!useApi) {
    return (
      userAverageSessions &&
      userAverageSessions.filter((user) => user.userId === parseInt(userId))
    );
  } else {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/average-sessions`
    );
    const responseData = await response.json();
    const arrayAverageSessions = [];
    arrayAverageSessions.push(responseData.data);
    return arrayAverageSessions;
  }
}

export async function fetchUserActivity(userId) {
  if (!useApi) {
    return (
      userActivity &&
      userActivity.filter((user) => user.userId === parseInt(userId))
    );
  } else {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/activity`
    );
    const responseData = await response.json();
    const arrayActivity = [];
    arrayActivity.push(responseData.data);
    return arrayActivity;
  }
}
