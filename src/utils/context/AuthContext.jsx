import React, { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [device, setDevice] = useState("web");

  const changeTheme = newTheme => {
    setTheme(newTheme);
  };

  const value = useMemo(
    () => ({
      theme,
      changeTheme,
      device,
      setDevice,
    }),
    // eslint-disable-next-line
    [theme, device],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default function useAuth() {
  return useContext(AuthContext);
}
