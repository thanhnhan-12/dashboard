export const useAuth = () => {
  const refreshToken = localStorage.getItem("isLoggedIn");

  if (refreshToken) {
    return true;
  } else {
    return false;
  }
};
