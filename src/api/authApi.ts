export const AuthApiLogin = (username: string, password: string) => {
  const isValid = username.includes('abc') && password.includes('abc123');

  return new Promise((resolve) => {
    setTimeout(() => {
      if (isValid) {
        localStorage.setItem('isLoggedIn', 'true');
        resolve(true);
      } else {
        localStorage.setItem('isLoggedIn', 'false');
        resolve(false);
      }
    }, 2000);
  });
};
