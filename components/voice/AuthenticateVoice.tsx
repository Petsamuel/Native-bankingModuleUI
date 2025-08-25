
// Voice authentication component
import React from 'react';
import { userService } from '@/api/services/userService';
import VoiceRecorder from './VoiceRecorder';

interface AuthenticateVoiceProps {
  userId: string;
}

export default function AuthenticateVoice({ userId }: AuthenticateVoiceProps) {
  const handleRecordingComplete = async (audioPath: string) => {
    try {
      // Create voice sample object with file information
      const voiceSample = {
        uri: 'file://' + audioPath,
        name: 'voice_sample.wav',
        type: 'audio/wav',
      };

      const response = await userService.authenticateVoice(parseInt(userId), voiceSample);
      const result = response.data;
      
      if (result.authenticated) {
        alert('Authenticated successfully!');
        // Optionally store the token if provided
        if (result.token) {
          // Store token for future API calls
          console.log('Authentication token:', result.token);
        }
      } else {
        alert('Authentication failed. Please try again.');
      }
    } catch (error) {
      console.error('Error authenticating voice:', error);
      alert('Authentication failed. Please try again.');
    }
  };

  return (
    <VoiceRecorder onRecordingComplete={handleRecordingComplete} />
  );
}
