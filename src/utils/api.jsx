import { userMainData } from "../datas/dataMocked";
import { userPerformance } from "../datas/dataMocked";
import { userAverageSessions } from "../datas/dataMocked";
import { userActivity } from "../datas/dataMocked";

export const apiUrl = "http://localhost:3000/user/";
const useApi = false;

export async function fetchUserMainData(userId) {
  if (!useApi) {
    return (
      userMainData &&
      userMainData.filter((user) => user.id === parseInt(userId))
    );
  } else {
    const response = await fetch(apiUrl + userId);
    const responseData = await response.json();
    return responseData.data;
  }
}

export async function fetchUserPerformance(userId) {
  if (!useApi) {
    return (
      userPerformance &&
      userPerformance.filter((user) => user.userId === parseInt(userId))
    );
  } else {
    const response = await fetch(apiUrl + userId);
    const responseData = await response.json();
    return responseData.data;
  }
}

export async function fetchUserAverageSessions(userId) {
  if (!useApi) {
    return (
      userAverageSessions &&
      userAverageSessions.filter((user) => user.userId === parseInt(userId))
    );
  } else {
    const response = await fetch(apiUrl + userId);
    const responseData = await response.json();
    return responseData.data;
  }
}

export async function fetchUserActivity(userId) {
  if (!useApi) {
    return (
      userActivity &&
      userActivity.filter((user) => user.userId === parseInt(userId))
    );
  } else {
    const response = await fetch(apiUrl + userId);
    const responseData = await response.json();
    return responseData.data;
  }
}
