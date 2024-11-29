import { getPayload } from './index';

export const signUp = async (id: string, password: string) => {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/regist`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      id,
      password,
    }),
  });
  if (!response.ok) {
    throw new Error('회원가입에 실패하였습니다.');
  }
  const data = await response.json();
  return data;
};

export const signIn = async (id: string, password: string) => {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      id,
      password,
    }),
  });
  if (!response.ok) {
    throw new Error('회원가입에 실패하였습니다.');
  }
  const data = await response.json();
  return data;
};

export const fetchMissionList = async (accessToken: string) => {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/mission/list`, {
    headers: {
      authorization: accessToken,
    },
  });
  const data = await response.json();
  const missionList = getPayload(data);
  return missionList;
};

export const completeMission = async (accessToken: string) => {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/mission/complete`, {
    method: 'PATCH',
    headers: {
      authorization: accessToken,
    },
  });
  const data = await response.json();
  const missionList = getPayload(data);
  return missionList;
};
