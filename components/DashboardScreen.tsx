// DashboardScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import tw from 'tailwind-react-native-classnames';

type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

export default function DashboardScreen({ navigation }: Props) {
  const [user, setUser] = useState<{name: string; email: string} | null>(null);

  useEffect(() => {
    (async () => {
      const userString = await AsyncStorage.getItem('user');
      if (userString) setUser(JSON.parse(userString));
    })();
  }, []);

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user');
    navigation.replace('Login');
  };

  const nextPage = async () => {
    navigation.replace('MainPage');
  };

  if (!user) {
    return (
      <View style={tw`flex-1 justify-center items-center bg-white`}>
        <Text style={tw`text-gray-700`}>Loading user info...</Text>
      </View>
    );
  }

  return (
    <View style={tw`flex-1 justify-center px-6 bg-white`}>
      <Text style={tw`text-3xl font-bold mb-4 text-center`}>Welcome, {user.name}!</Text>
      <Text style={tw`text-lg mb-10 text-center text-gray-700`}>Email: {user.email}</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ marginRight: 10 }}>
          <Button title="Logout" onPress={logout} color="#2563EB" />
        </View>
        <Button title="Next" onPress={nextPage} color="#2563EB" />
    </View>
    </View>
  );
}
