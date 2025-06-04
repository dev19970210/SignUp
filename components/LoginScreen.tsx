// LoginScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import tw from 'tailwind-react-native-classnames';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const mockUserDB = {
  email: 'user@example.com',
  password: 'password123',
  name: 'John Doe',
  id: 1,
};

async function mockLoginApi(email: string, password: string) {
  return new Promise<{token: string; user: {id: number; name: string; email: string}}>((resolve, reject) => {
    setTimeout(() => {
      if (email === mockUserDB.email && password === mockUserDB.password) {
        resolve({
          token: 'mock-jwt-token-1234567890',
          user: {
            id: mockUserDB.id,
            name: mockUserDB.name,
            email: mockUserDB.email,
          },
        });
      } else {
        reject(new Error('Invalid email or password'));
      }
    }, 1000);
  });
}

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (!email || !password) {
      Alert.alert('Please fill in both fields');
      return;
    }
    setLoading(true);
    try {
      const response = await mockLoginApi(email, password);
      await AsyncStorage.setItem('token', response.token);
      await AsyncStorage.setItem('user', JSON.stringify(response.user));
      navigation.replace('Dashboard');
    } catch (error: any) {
      Alert.alert('Login failed', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={tw`flex-1 justify-center bg-gray-100 px-6`}>
      <Text style={tw`text-3xl font-bold mb-8 text-center text-gray-900`}>
        Welcome! Please log in
      </Text>
      <TextInput
        style={tw`bg-white rounded-lg p-4 mb-4 border border-gray-300`}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        editable={!loading}
      />
      <TextInput
        style={tw`bg-white rounded-lg p-4 mb-6 border border-gray-300`}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        editable={!loading}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#2563EB" />
      ) : (
        <Button title="Login" onPress={onSubmit} color="#2563EB" />
      )}
    </View>
  );
}
