import { createContext, PropsWithChildren, useState } from 'react';
import { MSG_ERROR_FAIL_TO_SIGNIN, MSG_ERROR_FAIL_TO_SIGNUP } from '@/constants';
import { signIn as signInUser, signUp as signUpUser } from '@/api/missions';

const USERS = [
  {
    userId: 'admin',
    userPassword: '1234',
  },
];

export const CtxAuth = createContext<{
  isAuthenticated: boolean;
  userId: string;
  signIn: (userId: string, userPassword: string) => Promise<boolean>;
  signUp: (userId: string, userPassword: string) => Promise<boolean>;
  signOut: () => void;
}>({
  isAuthenticated: false,
  userId: '',
  signIn: async () => false,
  signUp: async () => false,
  signOut: () => false,
});

export default function AuthProvider({ children }: PropsWithChildren) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState('');
  const signIn = async (userId: string, userPassword: string) => {
    await signInUser(userId, userPassword);
    localStorage.setItem('userId', userId);
    localStorage.setItem('userPassword', userPassword);
    setIsAuthenticated(true);
    setUserId(userId);
    return true;
  };
  const signUp = async (userId: string, userPassword: string) => {
    const { accessToken } = await signUpUser(userId, userPassword);
    if (USERS.some((user) => user.userId === userId && user.userPassword === userPassword)) {
      alert(MSG_ERROR_FAIL_TO_SIGNUP);
      return false;
    }
    USERS.push({ userId, userPassword });
    return true;
  };
  const signOut = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('userPassword');
    setIsAuthenticated(false);
    setUserId('');
    window.location.reload();
  };
  return (
    <CtxAuth.Provider
      value={{
        isAuthenticated,
        userId,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </CtxAuth.Provider>
  );
}
