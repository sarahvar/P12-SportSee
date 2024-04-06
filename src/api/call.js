import { Session } from "../models/sessions";
import { Score } from "../models/score";
import { DataDay } from "../models/dataDay";
import { RadarData } from "../models/radarData";

const apiURL = import.meta.env.VITE_API_URL;

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

// USER MAIN DATA - retrieves information from a user
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

// USER_ACTIVITY - retrieves a user's activity day by day with kilograms and calories
export const getUserActivity = async (userId) => {
    return fetch(`${apiURL}/user/${userId}/activity`)
      .then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error ! Status: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        // console.log(data) 
        const session = new Session(data.data.sessions); 
        return session.format();
      })
      .catch((error) => {
        console.log('An error occurred:', error);
        throw error
      })
  };

// USER_AVERAGE_SESSIONS - retrieves the average sessions of a user per day
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

// USER_PERFORMANCE - retrieves a user's performance (energy, endurance, etc.)
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
