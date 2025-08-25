import { userService } from '@/api/services/userService';
import { Container } from '@/components/Container';
import { VoiceRecorder } from '@/components/voice';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Button, HelperText, IconButton, TextInput } from 'react-native-paper';
const logo = require('../assets/images/logo.png');
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState('');


  const handleSignup = () => {
    // Handle signup logic here
    console.log('Signup pressed');

    if(!name || !email || !password) {
      setError('Please fill in all required fields');
      return;
    }

    setLoading(true);
    userService.register({ name, email, password, phone })
      .then(() => {
        console.log('Signup successful');
      })
      .catch((err:any) => {
        console.error('Signup failed', err);
        setError('Signup failed');
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Container className="bg-primary flex justify-between flex-col">
      <View>
              <View className='flex items-center justify-center'>
        <Image source={logo} className="w-32 h-32" style={{width: 200, height: 80}}/>
      </View>
      <View className='flex gap-3 mt-5'>
      <View>
        <Text style={{ color: 'white' }} >Name</Text>
        <TextInput style={styles.inputField} value={name} onChangeText={setName} />
      </View>
      <View>
        <Text style={{ color: 'white' }} >Email</Text>
        <TextInput style={styles.inputField} value={email} onChangeText={setEmail} />
      </View>
      <View>
        <Text style={{ color: 'white' }}>Password</Text>
        <TextInput style={styles.inputField} value={password} onChangeText={setPassword} secureTextEntry />
      </View>
      <View>
        <Text style={{ color: 'white' }}>Phone</Text>
        <TextInput style={styles.inputField} value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      </View>
      </View>
      {error && <HelperText type='error' visible={!!error} style={{ color: "white" }}>
        {error}
      </HelperText>}
      <View>
        <Button mode='contained' className='mt-6' buttonColor='white' textColor='#009FDF' style={{ borderRadius: 10 }} labelStyle={{ fontSize: 18, }} onPress={handleSignup} 
        loading={loading}
        icon={loading ? "loading" : undefined}
        >Sign up</Button>
      </View>
      <View className="flex flex-row mt-3 text-sm justify-between">
        <Link href="/" className='text-sm text-white' >Forgot Password?</Link>
        <Link href="/signin" className="text-sm text-white"> Already have an account? Sign in</Link>
      </View>
      </View>
      {/* Voice  Login */}
      <View>
        <VoiceRecorder />
      </View>
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

export default Signup

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
