
import { Image, TextInput, View } from 'react-native';
import { Button, IconButton, Text, } from 'react-native-paper';
import { Container } from './components/Container';

import React, { useState } from 'react';
const logo = require('../assets/images/logo.png');

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignIn = () => {
    // Handle sign-in logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };
  return (
    <Container className="bg-primary">
      <View className="mt-6">
              <View className='flex items-center justify-center'>
        <Image source={logo} className="w-32 h-32" style={{width: 200, height: 80}}/>
      </View>
      <View className='flex gap-3 mt-5'>
      <View>
        <Text style={{ color: 'white' }} >Email</Text>
        <TextInput style={styles.inputField} value={email} onChangeText={setEmail} />
      </View>
      <View>
        <Text style={{ color: 'white' }}>Password</Text>/
        <TextInput style={styles.inputField} value={password} onChangeText={setPassword} />
      </View>
      </View>
      <View>
        <Button mode='contained' className='mt-6' buttonColor='white' textColor='#009FDF'>Sign in</Button>
      </View>
      <View className="flex flex-row mt-3 text-sm">
        <Button mode="text" textColor='white' className='text-sm' >Forgot Password?</Button>
        <Button mode="text" textColor='white' className="text-sm h-16"> Don&apos;t have an account? Sign up</Button>
      </View>

      <View className="mt-6 items-center flex flex-row justify-center mb-6">
        <IconButton
          icon="microphone"
          iconColor="white"
          containerColor="#009FDF"
          size={24}
          onPress={() => {
            console.log('Voice login pressed');
          }}
          style={{ borderRadius: 80, borderWidth: 1, borderColor: 'white' }}
        />
        <Text className='text-white'>Use Voice Login</Text>

      </View>

      <View className="mt-34 items-center flex-row justify-center">
        <IconButton
          icon="fingerprint"
          iconColor="white"
          containerColor="#009FDF"
          size={58}
          onPress={() => {
            console.log('Fingerprint login pressed');
          }}
      
        />
        
      </View>

      <View className='flex justify-between flex-row items-center mt-8'>
        <Button icon="location-search" mode="text" textColor="white">Find Us</Button>
        <Text style={{ color: 'white', marginLeft: 8 }}>Get Help</Text>

      </View>
      </View>
    </Container>
  )
}

export default Auth;

const styles = {
  inputField: {
    backgroundColor: 'transparent',
    color: 'white',
    borderRadius:10,
    paddingHorizontal: 18,
    paddingVertical: 10,
    marginBottom: 6,
    marginTop: 6,
    borderWidth: 2,
    borderColor: 'white',
    height: 60,

  },
};
