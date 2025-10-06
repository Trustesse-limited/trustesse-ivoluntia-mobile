import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeArea } from '@/components/safe-area';
import { Button } from '@/components/button';
import Icon from 'react-native-vector-icons/Ionicons';
import { router } from 'expo-router';
import { BioDataStep } from '@/components/onboarding-steps/BioDataStep';
import { LocationStep } from '@/components/onboarding-steps/LocationStep';
import { InterestsStep } from '@/components/onboarding-steps/InterestsStep';
import { SkillsStep } from '@/components/onboarding-steps/SkillsStep';
import { ProfileSetupStep } from '@/components/onboarding-steps/ProfileSetupStep';
import { SuccessModal } from '@/components/success-modal';

const STEPS = ['Bio Data', 'Location', 'Interests', 'Skills', 'Profile'];

export default function OnboardingForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [address, setAddress] = useState('');

  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);


  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);


  const [photoUri, setPhotoUri] = useState('');
  const [bio, setBio] = useState('');


  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      router.back();
    }
  };

  const handleSubmit = async () => {
    const formData = {
      firstName,
      lastName,
      gender,
      dateOfBirth,
      phoneNumber,
      country,
      state,
      city,
      zipCode,
      address,
      interests: selectedInterests,
      skills: selectedSkills,
      photoUri,
      bio,
    };

    console.log('Form submitted:', formData);

    setShowSuccessModal(true);
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    router.replace('/(tabs)');
  };

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(item => item !== interest)
        : [...prev, interest]
    );
  };

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(item => item !== skill)
        : [...prev, skill]
    );
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <BioDataStep
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            gender={gender}
            setGender={setGender}
            dateOfBirth={dateOfBirth}
            setDateOfBirth={setDateOfBirth}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
          />
        );
      case 1:
        return (
          <LocationStep
            country={country}
            setCountry={setCountry}
            state={state}
            setState={setState}
            city={city}
            setCity={setCity}
            zipCode={zipCode}
            setZipCode={setZipCode}
            address={address}
            setAddress={setAddress}
          />
        );
      case 2:
        return (
          <InterestsStep
            selectedInterests={selectedInterests}
            onToggleInterest={toggleInterest}
          />
        );
      case 3:
        return (
          <SkillsStep
            selectedSkills={selectedSkills}
            onToggleSkill={toggleSkill}
          />
        );
      case 4:
        return (
          <ProfileSetupStep
            photoUri={photoUri}
            setPhotoUri={setPhotoUri}
            bio={bio}
            setBio={setBio}
          />
        );
      default:
        return null;
    }
  };

  const renderProgressBar = () => {
    return (
      <View style={styles.progressContainer}>
        {STEPS.map((_, index) => (
          <View
            key={index}
            style={[
              styles.progressBar,
              index <= currentStep ? styles.progressBarActive : null,
            ]}
          />
        ))}
      </View>
    );
  };

  const needsKeyboardAvoidance = currentStep === 0 || currentStep === 1 || currentStep === 4;

  return (
    <SafeArea style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
        enabled={needsKeyboardAvoidance}
      >
        <View style={styles.container}>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Icon name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>

          {renderProgressBar()}

          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContent}
            showsVerticalScrollIndicator={false}
          >
            {renderStep()}
          </ScrollView>

          <View style={[
            styles.buttonContainer,
            (currentStep === 2 || currentStep === 3) && styles.buttonContainerRaised
          ]}>
            <Button
              title={currentStep === STEPS.length - 1 ? 'Continue' : 'Continue'}
              onPress={handleNext}
            />
          </View>
        </View>
      </KeyboardAvoidingView>

      <SuccessModal
        visible={showSuccessModal}
        onClose={handleSuccessModalClose}
        title="Success!"
        message="You have completed onboarding your account"
        linkText="Go ahead and explore Ivoluntia"
        buttonText="Done"
      />
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  keyboardView: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  buttonContainer: {
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  buttonContainerRaised: {
    paddingTop: 24,
    marginTop: -10,
  },
  backButton: {
    marginBottom: 16,
  },
  progressContainer: {
    flexDirection: 'row',
    marginBottom: 24,
    gap: 8,
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
  },
  progressBarActive: {
    backgroundColor: '#007AFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
});
