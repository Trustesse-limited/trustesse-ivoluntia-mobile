import { Stack, router, SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { useOnboardingState } from '../hooks/useOnboarding';
import { useFonts, OpenSans_600SemiBold } from '@expo-google-fonts/open-sans';



SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { isOnboarded, isLoading } = useOnboardingState();


  useEffect(() => {
    if (isLoading) {
      return; 
    }

  
    SplashScreen.hideAsync();

    if (isOnboarded) {
     
      router.replace('/(app)');
    } else {
    
      router.replace('/onboarding');
    }
  }, [isLoading, isOnboarded]);
  const [fontsLoaded] = useFonts({
    OpenSans_600SemiBold,
  });

  if (!fontsLoaded) {
    return null; 
  }
  
  if (isLoading) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen name="(app)" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
    </Stack>
  );
}