import { CookieValueTypes } from "cookies-next";

const simulateLoginCheck = (token: CookieValueTypes) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const isLoggedIn = token;
      resolve(isLoggedIn);
    }, 2000);
  });
};

export const checkToken = async (token: CookieValueTypes) => {
  try {
    const isLoggedIn = await simulateLoginCheck(token);
    return isLoggedIn;
  } catch (error) {
    console.error("Error during login check:", error);
    return false;
  }
};
