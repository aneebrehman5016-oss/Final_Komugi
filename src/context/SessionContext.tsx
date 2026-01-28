import React, { createContext, useContext, useEffect, useState } from 'react';
import { getOrCreateSessionId } from '../utils/sessionManager';

interface SessionContextType {
  sessionId: string;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [sessionId, setSessionId] = useState<string>('');

  useEffect(() => {
    setSessionId(getOrCreateSessionId());
  }, []);

  return (
    <SessionContext.Provider value={{ sessionId }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession(): SessionContextType {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error('useSession must be used within SessionProvider');
  }
  return context;
}
