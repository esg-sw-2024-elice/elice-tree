import { createContext, PropsWithChildren, useState } from 'react';

const USERS = [
  {
    userId: 'admin',
    userPassword: 'aaaa1111*',
  },
];

export const CtxAuth = createContext<{
  isAuthenticated: boolean;
  userId: string;
  signIn: (userId: string, userPassword: string) => boolean;
  signUp: (userId: string, userPassword: string) => boolean;
  signOut: () => void;
}>({
  isAuthenticated: false,
  userId: '',
  signIn: () => false,
  signUp: () => false,
  signOut: () => false,
});

export default function AuthProvider({ children }: PropsWithChildren) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState('');
  const signIn = (userId: string, userPassword: string) => {
    if (!USERS.some((user) => user.userId === userId && user.userPassword === userPassword)) {
      return false;
    }
    localStorage.setItem('userId', userId);
    localStorage.setItem('userPassword', userPassword);
    setIsAuthenticated(true);
    setUserId(userId);
    return true;
  };
  const signUp = (userId: string, userPassword: string) => {
    if (USERS.some((user) => user.userId === userId && user.userPassword === userPassword)) {
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
