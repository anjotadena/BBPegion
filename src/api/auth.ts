import firebase from 'firebase/app';
import 'firebase/auth';

export const signUpUser = async ({
  email,
  name,
  password,
}: {
  email: string;
  name: string;
  password: string;
}) => {
  try {
    const {user} = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    await firebase?.auth()?.currentUser?.updateProfile({displayName: name});

    return {user};
  } catch (error: any) {
    console.log(error, 'error');
    return {error: error?.message || 'Failed to signup!'};
  }
};

export const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<firebase.User | {error: string} | null> => {
  try {
    const {user} = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    return Promise.resolve(user);
  } catch (error: any) {
    return Promise.resolve({
      error: error?.message || 'Failed to login! Invalid credentials.',
    });
  }
};

export const resetPasswordUser = async ({
  email,
}: {
  email: string;
}): Promise<{error: string} | null> => {
  try {
    await firebase.auth().sendPasswordResetEmail(email);

    return Promise.resolve(null);
  } catch (error: any) {
    return Promise.resolve({
      error: error?.message || 'Failed to reset password!',
    });
  }
};

export const logoutUser = () => {
  firebase.auth().signOut();
};
