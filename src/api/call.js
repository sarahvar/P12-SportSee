/* SERVICE APPEL API */
import { Session } from "../models/sessions";
import { Score } from "../models/score";
import { DataDay } from "../models/dataDay";
import { RadarData } from "../models/radarData";

const apiURL = 'http://localhost:5173';

// USER MAIN DATA - Retrieves information from user
export const getAllDataUser = async (userId) => {
  return fetch(`${apiURL}/user/${userId}`)
    .then((res) => {
      if(!res.ok) {
        throw new Error(`HTTP error ! Status: ${res.status}`)
      }
      return res.json()
    })
    .then((data) => {
      // console.log(data.data);
      return data.data;
    })
}

export const getUserInformation = async (userId) => {
    return fetch(`${apiURL}/user/${userId}`)
      .then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error ! Status: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        // console.log(data);
        const score = new Score(data.data || data.data); 
        return score.format();
      })
      .catch((error) => {
        console.log('An error occurred:', error);
        throw error
      })
  };


export const getUserActivity = async (userId) => {
  try {
    const response = await fetch(`${apiURL}/user/${userId}/activity`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Invalid content type. Expected JSON.");
    }
    const data = await response.json();
    if (!data || !data.data || !data.data.sessions) {
      throw new Error("Invalid data format from API");
    }
    const session = new Session(data.data.sessions);
    return session.format();
  } catch (error) {
    console.error("An error occurred while fetching user activity:", error);
    throw error; // Re-throw the error to handle it in the calling code
  }
};
export const getUserAverageSessions = async (userId) => {
    return fetch(`${apiURL}/user/${userId}/average-sessions`)
      .then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error ! Status: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        // console.log(data);
        const dataDay = new DataDay(data.data);
        return dataDay.format(); 
      })
      .catch((error) => {
        console.log('An error occurred:', error);
        throw error
      })
  };

export const getUserPerformance = async (userId) => {
    return fetch(`${apiURL}/user/${userId}/performance`)
      .then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error ! Status: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        // console.log(data);
        const radarData = new RadarData(data.data.data, data.data.kind);
        return radarData.format();
      })
      .catch((error) => {
        console.log('An error occurred:', error);
        throw error
      })
  };
