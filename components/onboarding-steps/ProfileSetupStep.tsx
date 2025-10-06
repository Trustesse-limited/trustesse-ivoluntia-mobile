import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { ImageUpload } from '@/components/image-upload';

interface ProfileSetupStepProps {
  photoUri: string;
  setPhotoUri: (uri: string) => void;
  bio: string;
  setBio: (bio: string) => void;
}

export const ProfileSetupStep: React.FC<ProfileSetupStepProps> = ({
  photoUri,
  setPhotoUri,
  bio,
  setBio,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Setup your profile</Text>
      <Text style={styles.subtitle}>Upload a photo and write a short bio</Text>

      <ImageUpload
        label="Upload Photo"
        imageUri={photoUri}
        onImageSelected={setPhotoUri}
      />

      <Text style={styles.label}>Short Bio</Text>
      <TextInput
        style={styles.bioInput}
        placeholder="Not more than 100 words"
        placeholderTextColor="#999"
        value={bio}
        onChangeText={setBio}
        multiline
        maxLength={500}
        textAlignVertical="top"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
  },
  label: {
    marginBottom: 8,
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  bioInput: {
    borderWidth: 1,
    borderColor: '#C9C9C9',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 14,
    color: '#000',
    height: 120,
    backgroundColor: '#FFFFFF',
  },
});
