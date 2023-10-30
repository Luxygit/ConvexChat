import { Link, Stack } from 'expo-router';
import {ConvexProvider, ConvexReactClient} from 'convex/react'
import react from 'react'
 import { TouchableOpacity } from 'react-native';

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

export default function RootLayoutNav() {
  
  return (
  <ConvexProvider client={convex}>

 
      <Stack screenOptions={{headerStyle: {backgroundColor:'#EEA217'}, headerTintColor: '#ffff'}}>
       <Stack.Screen name='index' options={{}}/>

      
      </Stack> 
       </ConvexProvider>
  );
}
