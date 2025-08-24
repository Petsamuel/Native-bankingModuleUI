import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AuthenticateVoice, EnrollVoice } from '../components/voice/index';

export default function VoiceAuthScreen() {
  const [mode, setMode] = useState<'enroll' | 'authenticate' | null>(null);
  const userId = "fba2c451-b0f8-4853-a298-a9178a764562"; // Replace with actual user ID

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Voice Authentication</Text>
      
      {!mode && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => setMode('enroll')}
          >
            <Text style={styles.buttonText}>Enroll Voice</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => setMode('authenticate')}
          >
            <Text style={styles.buttonText}>Authenticate Voice</Text>
          </TouchableOpacity>
        </View>
      )}

      {mode === 'enroll' && (
        <View style={styles.componentContainer}>
          <Text style={styles.subtitle}>Voice Enrollment</Text>
          <EnrollVoice userId={userId} />
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => setMode(null)}
          >
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
      )}

      {mode === 'authenticate' && (
        <View style={styles.componentContainer}>
          <Text style={styles.subtitle}>Voice Authentication</Text>
          <AuthenticateVoice userId={userId} />
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => setMode(null)}
          >
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  buttonContainer: {
    gap: 15,
  },
  componentContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#666',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    minWidth: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
