import { useContext } from 'react';
import { CtxAuth } from '@/providers/auth-provider';

export const useAuth = () => useContext(CtxAuth);
