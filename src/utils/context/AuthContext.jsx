import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  const changeTheme = newTheme => {
    setTheme(newTheme);
  };

  const value = useMemo(
    () => ({
      theme,
      changeTheme,
    }),
    // eslint-disable-next-line
    [theme],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default function useAuth() {
  return useContext(AuthContext);
}
