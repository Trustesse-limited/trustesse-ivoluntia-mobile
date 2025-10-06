import { router } from "expo-router";
import { View, Text, StyleSheet, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useRef, useEffect } from "react";
import PagerView from "react-native-pager-view";
import image1 from "@/assets/onboarding-images/image1.png";
import image2 from "@/assets/onboarding-images/image2.png";
import image3 from "@/assets/onboarding-images/image3.png";
import { Button } from "@/components/button";
import { Image, Dimensions } from "react-native";

const PagerComponent = Platform.OS === "web" ? View : PagerView;

const onboardingData = [
  {
    title: "Welcome to Our App!",
    text: "This app helps you manage your daily tasks. Let's get started!",
    image: image1,
  },
  {
    title: "Stay Organized",
    text: "Track your progress and stay on top of your goals with ease.",
    image: image2,
  },
  {
    title: "Get Notified",
    text: "Receive timely reminders so you never miss a beat.",
    image: image3,
  },
];

export default function OnboardingScreen() {
  const pagerRef = useRef<PagerView>(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    onboardingData.forEach((item) => {
      const imageUri = Image.resolveAssetSource(item.image).uri;
      if (imageUri) {
        Image.prefetch(imageUri);
      }
    });
  }, []);

  const handleNextScreen = async () => {
    if (currentPage < onboardingData.length - 1) {
      pagerRef.current?.setPage(currentPage + 1);
    } else {
      await completeOnboarding();
    }
  };

  const completeOnboarding = async () => {
    try {
      await AsyncStorage.setItem("@onboarding_complete", "true");
     router.replace("/login");

    } catch (error) {
      console.error("Failed to save onboarding status", error);
    }
  };

  return (
   <View style={styles.container}>
  {currentPage < onboardingData.length - 1 && (
    <Button
      title="Skip"
      onPress={completeOnboarding}
      style={styles.skipButton}
       textStyle={{ fontSize: 12 }} 
    />
  )}

  <PagerComponent
    style={styles.pagerView}
    initialPage={0}
    ref={pagerRef}
    onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
  >
    {onboardingData.map((item, index) => (
      <View key={index} style={styles.page}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    ))}
  </PagerComponent>

  <Button
    title={
      currentPage === onboardingData.length - 1
        ? "Get Started"
        : "Continue"
    }
    onPress={handleNextScreen}
    style={styles.button}
  />
</View>

  );
}

const styles = StyleSheet.create({
  skipButton: {
    position: "absolute",
    top: 40,
    width:80,
    right: 20,
    backgroundColor: "#ccc",
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 20,
    zIndex: 10,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  pagerView: {
    height: "50%",
    width: "100%",
  },
  page: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  image: {
   width: Dimensions.get("window").width - 40, 
    height: 260,
    resizeMode: "contain",
  },
  title: {
    fontFamily: "OpenSans_600SemiBold",
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: 0.5,
    textAlign: "left",
    marginBottom: 10,
  },
  text: {
    fontFamily: "OpenSans_400Regular",
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.5,
    color: "#666",
    textAlign: "left",
   
  },
  textContainer: {
   paddingHorizontal: 20,
  },
  button: {
    alignSelf: "stretch",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    opacity: 1,
    backgroundColor: "#0E68DC",
    justifyContent: "center",
    marginBottom: 40,
    transform: [{ rotate: "0deg" }],
  },
});
