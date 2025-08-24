// Voice recording component
import React, { useState } from 'react';
import { Button, View } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const audioRecorderPlayer = AudioRecorderPlayer;

interface VoiceRecorderProps {
  onRecordingComplete?: (audioPath: string) => void;
}

export default function VoiceRecorder({ onRecordingComplete }: VoiceRecorderProps) {
  const [recording, setRecording] = useState(false);
  const [audioPath, setAudioPath] = useState<string | null>(null);

  const startRecording = async () => {
    try {
      const result = await audioRecorderPlayer.startRecorder('voice_sample.wav');
      setRecording(true);
      setAudioPath(result); // Path to the recorded file
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };

  const stopRecording = async () => {
    try {
      const result = await audioRecorderPlayer.stopRecorder();
      setRecording(false);
      setAudioPath(result); // Path to the recorded file
      if (onRecordingComplete) {
        onRecordingComplete(result); // Send file path to parent
      }
    } catch (error) {
      console.error('Error stopping recording:', error);
    }
  };

  return (
    <View>
      <Button title="Start Recording" onPress={startRecording} disabled={recording} />
      <Button title="Stop Recording" onPress={stopRecording} disabled={!recording} />
    </View>
  );
}
