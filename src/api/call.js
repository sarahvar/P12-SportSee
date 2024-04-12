import { Session } from "../models/sessions";
import { Score } from "../models/score";
import { DataDay } from "../models/dataDay";
import { RadarData } from "../models/radarData";


const apiURL = import.meta.env.VITE_API_URL;

export const getUserById = async (userId) => {
  return fetch(`${apiURL}/user/${userId}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      return data.data;
    });
};

export const getUserScore = async (userId) => {
  return fetch(`${apiURL}/user/${userId}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      const score = new Score(data.data || data.data);
      return score.format();
    });
};

export const getUserActivityById = async (userId) => {
  return fetch(`${apiURL}/user/${userId}/activity`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      const session = new Session(data.data.sessions);
      return session.format();
    });
};

export const getUserAverageSession = async (userId) => {
  return fetch(`${apiURL}/user/${userId}/average-sessions`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      const dataDay = new DataDay(data.data);
      return dataDay.format();
    });
};

export const getUserPerformance = async (userId) => {
  return fetch(`${apiURL}/user/${userId}/performance`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      const radarData = new RadarData(data.data.data, data.data.kind);
      return radarData.format();
    });
};
