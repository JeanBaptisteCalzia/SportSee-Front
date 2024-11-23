import { userMainData } from "../datas/dataMocked";
import { userPerformance } from "../datas/dataMocked";
import { userAverageSessions } from "../datas/dataMocked";
import { userActivity } from "../datas/dataMocked";

import { UserActivity } from "../models/UserActivity";
import { UserData } from "../models/UserData";
import { UserPerformance } from "../models/UserPerformance";
import { UserAverage } from "../models/UserAverage";

/**
 * Fetch data from Api if apiData is set on true, otherwise fetch data from mocked data
 * @param { Number } userId  Id of the user as an integer
 * @param { Boolean } apiData If set on true load data from API otherwise from Mocked data
 * @return { Array.<Object> }
 */

const apiPath = "http://localhost:3000/user/";

export async function fetchUserMainData(userId, apiData) {
  if (!apiData) {
    const dataMainData =
      userMainData &&
      userMainData.filter((user) => user.id === parseInt(userId));
    return new UserData(dataMainData);
  } else {
    const response = await fetch(`${apiPath}${userId}`);
    const responseData = await response.json();

    // Format the data
    const arrayMainData = [];
    arrayMainData.push(responseData.data);
    return new UserData(arrayMainData);
  }
}

export async function fetchUserPerformance(userId, apiData) {
  if (!apiData) {
    const dataUserPerformance =
      userPerformance &&
      userPerformance.filter((user) => user.userId === parseInt(userId));
    return new UserPerformance(dataUserPerformance);
  } else {
    const response = await fetch(`${apiPath}${userId}/performance`);
    const responseData = await response.json();

    // Format the data
    const arrayPerformance = [];
    arrayPerformance.push(responseData.data);
    return new UserPerformance(arrayPerformance);
  }
}

export async function fetchUserAverageSessions(userId, apiData) {
  if (!apiData) {
    const dataAverageSessions =
      userAverageSessions &&
      userAverageSessions.filter((user) => user.userId === parseInt(userId));
    return new UserAverage(dataAverageSessions);
  } else {
    const response = await fetch(`${apiPath}${userId}/average-sessions`);
    const responseData = await response.json();

    // Format the data
    const arrayAverageSessions = [];
    arrayAverageSessions.push(responseData.data);
    return new UserAverage(arrayAverageSessions);
  }
}

export async function fetchUserActivity(userId, apiData) {
  if (!apiData) {
    const dataUserActivity =
      userActivity &&
      userActivity.filter((user) => user.userId === parseInt(userId));
    return new UserActivity(dataUserActivity);
  } else {
    const response = await fetch(`${apiPath}${userId}/activity`);
    const responseData = await response.json();

    // Format the data
    const arrayActivity = [];
    arrayActivity.push(responseData.data);
    return new UserActivity(arrayActivity);
  }
}
