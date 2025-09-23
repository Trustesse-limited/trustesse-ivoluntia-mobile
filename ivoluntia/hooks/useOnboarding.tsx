import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ONBOARDING_KEY = '@onboarding_complete';

export function useOnboardingState() {
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function checkOnboardingStatus() {
      try {
        const value = await AsyncStorage.getItem(ONBOARDING_KEY);
        if (value === 'true') {
          setIsOnboarded(true);
        }
      } catch (error) {
        console.error("Error reading onboarding status from AsyncStorage", error);
      } finally {
        setIsLoading(false);
      }
    }
    checkOnboardingStatus();
  }, []);

  return { isOnboarded, isLoading };
}