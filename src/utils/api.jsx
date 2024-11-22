import { userMainData } from "../datas/dataMocked";
import { userPerformance } from "../datas/dataMocked";
import { userAverageSessions } from "../datas/dataMocked";
import { userActivity } from "../datas/dataMocked";

/**
 * Fetch data from Api if apiData is set on true, otherwise fetch data from mocked data
 * @param { Number } userId  Id of the user as an integer
 * @param { Boolean } apiData If set on true load data from API otherwise from Mocked data
 * @return { Array.<Object> }
 */

const apiPath = "http://localhost:3000/user/";

export async function fetchUserMainData(userId, apiData) {
  if (!apiData) {
    return (
      userMainData &&
      userMainData.filter((user) => user.id === parseInt(userId))
    );
  } else {
    const response = await fetch(`${apiPath}${userId}`);
    const responseData = await response.json();

    // Format the data
    const arrayMainData = [];
    arrayMainData.push(responseData.data);
    return arrayMainData;
  }
}

export async function fetchUserPerformance(userId, apiData) {
  if (!apiData) {
    return (
      userPerformance &&
      userPerformance.filter((user) => user.userId === parseInt(userId))
    );
  } else {
    const response = await fetch(`${apiPath}${userId}/performance`);
    const responseData = await response.json();

    // Format the data
    const arrayPerformance = [];
    arrayPerformance.push(responseData.data);
    return arrayPerformance;
  }
}

export async function fetchUserAverageSessions(userId, apiData) {
  if (!apiData) {
    return (
      userAverageSessions &&
      userAverageSessions.filter((user) => user.userId === parseInt(userId))
    );
  } else {
    const response = await fetch(`${apiPath}${userId}/average-sessions`);
    const responseData = await response.json();

    // Format the data
    const arrayAverageSessions = [];
    arrayAverageSessions.push(responseData.data);
    return arrayAverageSessions;
  }
}

export async function fetchUserActivity(userId, apiData) {
  if (!apiData) {
    return (
      userActivity &&
      userActivity.filter((user) => user.userId === parseInt(userId))
    );
  } else {
    const response = await fetch(`${apiPath}${userId}/activity`);
    const responseData = await response.json();

    // Format the data
    const arrayActivity = [];
    arrayActivity.push(responseData.data);
    return arrayActivity;
  }
}
