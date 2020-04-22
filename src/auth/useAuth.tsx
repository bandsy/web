import React, { useState, useContext, createContext } from "react";

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  // const login = (email: string, password: string, mfa?: string) {
  //   fetch("https://dev.identity.bandsy.app/api/v1/login")
  // }

  const register = async (email: string, password: string) => {
    return fetch(
      "https://dev.identity.bandsy.app/api/v1/visitor/bandsy/register",
      {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(async e => {
        if (e.ok) {
          setUser({ verificationNeeded: true });
          return { verificationNeeded: true };
        }
        console.warn(e);
        console.warn(await e.json());
      })
      .catch(e => console.error(e));
  };

  return {
    user,
    register,
  };
}
