import React from 'react';
import { View, Text, Button, TouchableOpacity, Dimensions, ImageBackground,Image   } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconFA from 'react-native-vector-icons/FontAwesome5';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'MainPage'>;
const screenWidth = Dimensions.get('window').width;
const buttonWidth = screenWidth * 0.45;

export default function MainPage({ navigation }: Props) {
  
  const previousPage = async () => {
    navigation.replace('Dashboard');
  };

  return (
    <View style={tw`flex-1 p-6`}>
      <View style={tw`flex-1 flex-col`}>
             <ImageBackground
              source={require('./image/image.png')} // Replace with your image URL or local require()
              style={[tw`p-2 w-full h-full`, { flex: 0.4 }]}
              imageStyle={{ borderBottomLeftRadius: 25, borderBottomRightRadius: 25, }} // to keep rounded corners on the image
              resizeMode="cover"
            >
        {/* Row 1: 40% height, split into 3 rows with 40%,40%,20% */}
          <View style={tw`flex-1 flex-col`}>
            <View style={[tw`rounded p-2 justify-center items-center mb-2`, { flex: 0.4 }]}>
              <Text style={tw`text-2xl font-bold text-white`}>Hello World!</Text>
              <Text style={tw`text-lg font-semibold text-white`}>Hello World!</Text>
            </View>
            <View style={[tw`rounded p-2 justify-center items-center mb-2`, { flex: 0.3 }]}>
            </View>
            <View style={[tw`rounded p-2 justify-center items-center`, { flex: 0.3 }]}>
              <TouchableOpacity
                style={[tw`bg-gray-600 h-16 justify-center items-center shadow-lg rounded-l-full rounded-r-full`, { width: buttonWidth }]}
                activeOpacity={0.7}
              >
                <View style={tw`flex-row justify-center`}>
                  <Text style={tw`text-2xl font-bold mr-2 text-gray-200`}>Hello World</Text>
                  <Icon name="plus" size={30} color="white" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <View style={[tw`rounded justify-center items-center`, { flex: 0.6, width: '100%' }]}>
          <View style={[tw`w-full px-4 flex-row justify-between items-center`, { flex: 0.12 }]}>
                <TouchableOpacity style={tw`bg-gray-300 p-2 rounded-full`} onPress={previousPage}>
                  <Icon name="anchor" size={25} color="black" />
                </TouchableOpacity>

                <View style={tw`flex-row items-center`}>
                  <Text style={tw`text-2xl font-semibold mr-2`}>Your Text</Text>
                  <TouchableOpacity>
                    <IconFA name="lightbulb" size={30} color="blue" />
                  </TouchableOpacity>
                </View>
              </View>
          <View style={[tw`w-full flex-row justify-between`, { flex: 0.28 }]}>
            <Image
              source={require('./image/img1.png')}
              style={[tw`flex-1 rounded-lg mr-2`, { width: undefined, height: undefined }]}
              resizeMode="cover"
            />
            <Image
              source={require('./image/img2.png')}
              style={[tw`flex-1 rounded-lg mx-2`, { width: undefined, height: undefined }]}
              resizeMode="cover"
            />
            <Image
              source={require('./image/img3.png')}
              style={[tw`flex-1 rounded-lg ml-2`, { width: undefined, height: undefined }]}
              resizeMode="cover"
            />
          </View>
          <View style={[tw`w-full flex-row items-center justify-end`, { flex: 0.13 }]} >
            <Text style={tw`text-2xl font-semibold mr-2`}>Your Text</Text>
            <Icon name="game-controller" size={30} />
          </View>
            <View style={[tw`w-full flex-row`, { flex: 0.47 }]}>
            <View style={[tw`flex-1 mr-7`]}>
              <View style={[tw`w-full`, { flex: 0.45 }]} >
                <Image
                  source={require('./image/img4.png')}
                  style={[
                    tw`flex-1`,
                    {
                      width: undefined, 
                      height: undefined,
                      flex: 0.45,
                      borderTopLeftRadius: 15,
                      borderTopRightRadius: 15,
                      borderBottomRightRadius: 15,
                      borderBottomLeftRadius: 0,
                      overflow: 'hidden',
                    },
                  ]}
                  resizeMode="cover"
                />
              </View>
              <View style={[tw`w-full flex-row justify-between items-center`, { flex: 0.20}]}>
              <TouchableOpacity
                style={[
                  tw`bg-gray-300 rounded-full justify-center items-center`,
                  { height: 25, width: 120, paddingVertical: 0, paddingHorizontal: 0 },
                ]}
              >
                <Text style={tw`text-gray-800 font-semibold text-center`}>My Btn</Text>
              </TouchableOpacity>
                <Text style={tw`text-lg`}>Right Text</Text>
              </View>
              <View style={[tw`w-full flex-row justify-end items-center`, { flex: 0.10}]}>
                <Text style={tw`mr-3 text-lg`}>Your Text</Text>
                <Icon name="star" size={20} color="lightblue" />
              </View>
              <View style={[tw`w-full flex-row justify-end items-center`, { flex: 0.10 }]}>
                <Text style={tw`mr-3 text-lg`}>My Text</Text>
                <Icon name="star" size={20} color="lightblue" />
              </View>
              <View style={[tw`w-full flex-row justify-between items-center`, { flex: 0.15}]}>
              <TouchableOpacity style={[tw`border border-blue-700 rounded-full justify-center items-center`,{height: 25, width: 120, paddingVertical: 0, paddingHorizontal: 0 }]}>
                <Text style={tw`text-gray-800 font-semibold`}>Left Button</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[tw`bg-gray-300  rounded-full justify-center items-center`,{height: 25, width: 120, paddingVertical: 0, paddingHorizontal: 0 }]}>
                <Text style={tw`text-gray-800 font-semibold`}>Right Button</Text>
              </TouchableOpacity>
            </View>
            </View>
            <View style={[tw`flex-1`]}>
              <View style={[tw`w-full`, { flex: 0.45 }]} >
                <Image
                  source={require('./image/img4.png')}
                  style={[
                    tw`flex-1`,
                    {
                      width: undefined, 
                      height: undefined,
                      flex: 0.45,
                      borderTopLeftRadius: 15,
                      borderTopRightRadius: 15,
                      borderBottomRightRadius: 15,
                      borderBottomLeftRadius: 0,
                      overflow: 'hidden',
                    },
                  ]}
                  resizeMode="cover"
                />
              </View>
              <View style={[tw`w-full flex-row justify-between items-center`, { flex: 0.20}]}>
              <TouchableOpacity
                style={[
                  tw`bg-gray-300 rounded-full justify-center items-center`,
                  { height: 25, width: 120, paddingVertical: 0, paddingHorizontal: 0 },
                ]}
              >
                <Text style={tw`text-gray-800 font-semibold text-center`}>My Btn</Text>
              </TouchableOpacity>
                <Text style={tw`text-lg`}>Right Text</Text>
              </View>
              <View style={[tw`w-full flex-row justify-end items-center`, { flex: 0.10}]}>
                <Text style={tw`mr-3 text-lg`}>Your Text</Text>
                <Icon name="star" size={20} color="lightblue" />
              </View>
              <View style={[tw`w-full flex-row justify-end items-center`, { flex: 0.10 }]}>
                <Text style={tw`mr-3 text-lg`}>My Text</Text>
                <Icon name="star" size={20} color="lightblue" />
              </View>
              <View style={[tw`w-full flex-row justify-between items-center`, { flex: 0.15}]}>
              <TouchableOpacity style={[tw`border border-blue-700 rounded-full justify-center items-center`,{height: 25, width: 120, paddingVertical: 0, paddingHorizontal: 0 }]}>
                <Text style={tw`text-gray-800 font-semibold`}>Left Button</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[tw`bg-gray-300  rounded-full justify-center items-center`,{height: 25, width: 120, paddingVertical: 0, paddingHorizontal: 0 }]}>
                <Text style={tw`text-gray-800 font-semibold`}>Right Button</Text>
              </TouchableOpacity>
            </View>
            </View>
            </View>
        </View>
      </View>
 
    </View>
  );
};

