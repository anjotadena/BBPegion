import firebase from 'firebase/app';
import 'firebase/auth';
import React, {createContext, useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {firebaseConfig} from '../core/config';
import {RootState} from '../store/store';

const FirebaseContext = createContext({});

type Props = {
  children: React.ReactElement;
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const FirebaseProvider = ({children}: Props) => {
  const navigation = useNavigation();
  const authUserState = useSelector((state: RootState) => state.authUser);

  console.log(authUserState);

  useEffect(() => {
    const unsubscribeAuthStateListener = firebase
      .auth()
      .onAuthStateChanged(user => {
        const routeScreen = user ? 'Home' : 'StartScreen';

        navigation.reset({
          index: 0,
          routes: [{name: routeScreen as never}],
        });
      });

    return () => unsubscribeAuthStateListener();
  }, [navigation]);

  return (
    <FirebaseContext.Provider value={{}}>{children}</FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
