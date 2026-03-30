import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type OnboardingParams = {
  goal?: string;
  experience?: string;
  daysPerWeek?: string;
  equipment?: string;
  sessionLength?: string;
};

function getSuggestedPlan(goal?: string, daysPerWeek?: string): string {
  if (goal === 'Build muscle' && daysPerWeek === '4 days') {
    return '12-week Upper/Lower hypertrophy plan';
  }
  if (goal === 'Get stronger' && daysPerWeek === '3 days') {
    return '12-week Full Body strength plan';
  }
  return '8-week General fitness plan';
}

export default function PlanReadyScreen(): React.JSX.Element {
  const params = useLocalSearchParams<OnboardingParams>();

  const rows: { label: string; value: string | undefined }[] = [
    { label: 'Goal', value: params.goal },
    { label: 'Experience', value: params.experience },
    { label: 'Days per week', value: params.daysPerWeek },
    { label: 'Equipment', value: params.equipment },
    { label: 'Session length', value: params.sessionLength },
  ];

  const suggestedPlan = getSuggestedPlan(params.goal, params.daysPerWeek);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your plan is ready</Text>
      <Text style={styles.subtitle}>Next we'll generate your first structured workout plan.</Text>

      {rows.map(({ label, value }) => (
        <View key={label} style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>{label}</Text>
          <Text style={styles.summaryValue}>{value && value.length > 0 ? value : 'Not selected'}</Text>
        </View>
      ))}

      <View style={styles.planBox}>
        <Text style={styles.planLabel}>Suggested plan</Text>
        <Text style={styles.planValue}>{suggestedPlan}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => console.log('Onboarding complete')}>
        <Text style={styles.buttonText}>Let's go</Text>
      </TouchableOpacity>
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
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#1E2530' },
  summaryLabel: { color: '#9CA3AF', fontSize: 14 },
  summaryValue: { color: '#FFFFFF', fontSize: 14, fontWeight: '600' },
  planBox: { backgroundColor: '#1E2530', borderRadius: 12, padding: 16, marginTop: 24 },
  planLabel: { color: '#9CA3AF', fontSize: 12, marginBottom: 4 },
  planValue: { color: '#4F8EF7', fontSize: 16, fontWeight: '700' },
});
