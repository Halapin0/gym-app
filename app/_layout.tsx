import { Stack } from 'expo-router';

export default function RootLayout() {
  const headerStyle = {
    headerTitleAlign: 'center' as const,
    headerStyle: { backgroundColor: '#101418' },
    headerTintColor: '#FFFFFF',
  };

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Gym App', ...headerStyle }} />
      <Stack.Screen name="goal" options={{ title: 'Your Goal', ...headerStyle }} />
      <Stack.Screen name="experience" options={{ title: 'Experience', ...headerStyle }} />
      <Stack.Screen name="days-per-week" options={{ title: 'Days Per Week', ...headerStyle }} />
      <Stack.Screen name="equipment" options={{ title: 'Equipment', ...headerStyle }} />
      <Stack.Screen name="session-length" options={{ title: 'Session Length', ...headerStyle }} />
      <Stack.Screen name="plan-ready" options={{ title: 'Plan Ready', ...headerStyle }} />
    </Stack>
  );
}