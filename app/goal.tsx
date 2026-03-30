import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type OnboardingParams = {
  goal?: string;
  experience?: string;
  daysPerWeek?: string;
  equipment?: string;
  sessionLength?: string;
};

export default function GoalScreen(): React.JSX.Element {
  const options: string[] = ['Build muscle', 'Lose fat', 'Get stronger', 'Stay consistent'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is your goal?</Text>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={styles.option}
          onPress={() =>
            router.push({
              pathname: '/experience',
              params: { goal: option } satisfies OnboardingParams,
            })
          }
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#101418', padding: 24, justifyContent: 'center' },
  title: { color: '#FFFFFF', fontSize: 28, fontWeight: '700', marginBottom: 8 },
  subtitle: { color: '#9CA3AF', fontSize: 16, marginBottom: 32 },
  option: { backgroundColor: '#1E2530', borderRadius: 12, padding: 16, marginBottom: 12 },
  optionText: { color: '#FFFFFF', fontSize: 16 },
  button: { backgroundColor: '#4F8EF7', borderRadius: 12, padding: 16, alignItems: 'center', marginTop: 24 },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
});
