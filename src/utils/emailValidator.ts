export default (email: string) => {
  const regEx = /\S+\@\S+\.\S+/;

  if (!email) {
    return "Email can't be empty!";
  }

  if (!regEx.test(email)) {
    return 'Email is invalid!';
  }

  return '';
};
