import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Text} from 'react-native';
import {logoutUser} from '../../api/auth';

import {Background} from '../../components';
import Button from '../../components/Button';
import {RootStackParamList} from '../../types/app';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AuthLoadingScreen'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const HomeScreen = ({}: Props): React.ReactElement => {
  const [loading, setLoading] = useState(false);

  const handleOnPressLogout = async () => {
    setLoading(true);
    await logoutUser();
    setLoading(false);
  };

  return (
    <Background>
      <Text>Home Screen</Text>
      <Button
        loading={loading}
        disabled={loading}
        onPress={handleOnPressLogout}>
        Logout
      </Button>
    </Background>
  );
};

export default HomeScreen;
