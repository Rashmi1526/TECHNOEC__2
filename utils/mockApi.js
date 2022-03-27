export const userLogin = async ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (['technoec@gmail.com','testing@gmail.com','user1@gmail.com','user2@gmail.com'].includes(email) && password === 'password') {
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
};
