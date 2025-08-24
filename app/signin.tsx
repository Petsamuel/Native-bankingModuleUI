
import { Container } from '@/components/Container';
import { Image, TextInput, View } from 'react-native';
import { Button, HelperText, IconButton, Text } from 'react-native-paper';

import { userService } from '@/app/api/services/userService';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { useApi } from '../hooks/useApi';
const logo = require('../assets/images/logo.png');

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { data: users, error, status } = useApi(userService.getUsers);
  // const theme = useTheme();
  const handleSignIn = async () => {
    if (!email || !password) {
      // setError('Please enter both email and password');
      setTimeout(() => {
        // setError('');
      }, 3000);
      return;
    }
    setLoading(true);

    // Handle sign-in logic here
    try {
      const response = await userService.login(email, password);
      console.log('Login successful:', response);
    } catch (error) {
      console.error('Login failed:', error);
    }

    if (status === 'success') {
      // Navigate to the home screen or perform any other action
      console.log('User data:', users);
    }

  };
  return (
    <Container className="bg-primary flex justify-between flex-col">
      <View className="">
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
      {error && <HelperText type='error' visible={!!error} style={{ color: "white" }}>
        {error}
      </HelperText>}
      <View>
        <Button mode='contained' className='mt-6' buttonColor='white' textColor='#009FDF' style={{ borderRadius: 10 }} labelStyle={{ fontSize: 18, }} onPress={handleSignIn} 
        loading={loading}
        icon={loading ? "loading" : undefined}
        >Sign in</Button>
      </View>
      <View className="flex flex-row mt-3 text-sm justify-between">
        <Link href="/" className='text-sm text-white' >Forgot Password?</Link>
        <Link href="/signup" className="text-sm text-white"> Don&apos;t have an account? Sign up</Link>
      </View>
      </View>
      {/* Voice  Login */}
       {/* <Link href="/voice-auth" className="flex w-full justify-center items-center"> */}
       <View className='flex flex-row items-center justify-center gap-2 text-center'>
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
         <Text className='text-white' style={{color: 'white'}} >Use Voice Login</Text>
       </View>

      {/* </Link> */}
{/* Fingerprint Login */}
      <View className="flex  items-center flex-row justify-center ">
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

        <View className='flex justify-between flex-row items-center '>
        <Button icon="map-marker" mode="text" textColor="white">Find Us</Button>
        <Text style={{ color: 'white', marginLeft: 8 }}>Get Help</Text>

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
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#7ECED5',
    height: 60,
  },
  
  
};
