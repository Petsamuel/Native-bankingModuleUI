// Voice enrollment component
import React from 'react';
import { userService } from '../../app/api/services/userService';
import VoiceRecorder from './VoiceRecorder';

interface EnrollVoiceProps {
  userId: string;
}

export default function EnrollVoice({ userId }: EnrollVoiceProps) {
  const handleRecordingComplete = async (audioPath: string) => {
    try {
      // Create voice sample object with file information
      const voiceSample = {
        uri: 'file://' + audioPath,
        name: 'voice_sample.wav',
        type: 'audio/wav',
      };

      const response = await userService.enrollVoice(parseInt(userId), voiceSample);
      alert(response.data.success ? 'Enrollment successful!' : 'Enrollment failed');
    } catch (error) {
      console.error('Error enrolling voice:', error);
      alert('Enrollment failed. Please try again.');
    }
  };

  return (
    <VoiceRecorder onRecordingComplete={handleRecordingComplete} />
  );
}
