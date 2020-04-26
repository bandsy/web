import React, { useState, useContext, createContext } from "react";
import Cookie from "universal-cookie";
import Progress from "rsup-progress";

const authContext = createContext();
const cookie = new Cookie();

const progress = new Progress({
  height: 5,
  color: "#D96277",
});

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

export enum userStatus {
  VERIFICATION_NEEDED,
  MFA_REQUIRED,
}

export enum bandsyResponseCode {
  ERROR_HANDLER_ERROR,
  UNKNOWN_ERROR,
  VALIDATION_ERROR,
  CLIENT_ERROR,
  SERVER_ERROR,
  DUPLICATE_EMAIL,
  INVALID_ACCOUNT,
  INVALID_VERIFICATION,
  INVALID_CREDENTIALS,
  INVALID_MFA,
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  // const login = (email: string, password: string, mfa?: string) {
  //   fetch("https://dev.identity.bandsy.app/api/v1/login")
  // }

  const register = async (email: string, password: string) => {
    return progress.promise(
      fetch("https://dev.identity.bandsy.app/api/v1/visitor/bandsy/register", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(async e => {
          if (e.ok) {
            setUser({ status: userStatus.VERIFICATION_NEEDED, details: {} });
            return { status: userStatus.VERIFICATION_NEEDED, details: {} };
          }
          console.warn(e);
          console.warn(await e.json());
        })
        .catch(e => console.error(e))
    );
  };

  const verify = async (email: string, verificationCode: string) => {
    return fetch(
      "https://dev.identity.bandsy.app/api/v1/visitor/bandsy/verify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, verificationCode }),
      }
    )
      .then(json => json.json())
      .then(e => {
        cookie.set("token", e.token, {
          expires: new Date(e.validUntil),
          path: "/",
        });
      });
  };

  return {
    user,
    register,
    verify,
  };
}
