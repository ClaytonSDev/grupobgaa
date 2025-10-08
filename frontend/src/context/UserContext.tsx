// src/context/UserContext.tsx
import React, { createContext, useContext, useState } from "react";

type User = { id: string; name: string; email: string } | null;

type UserContextValue = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  logout: () => void;
};

const UserContext = createContext<UserContextValue | null>(null);

export const UserProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const logout = () => setUser(null);
  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextValue => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used within UserProvider");
  return ctx;
};
