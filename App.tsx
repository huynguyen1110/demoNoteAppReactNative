import NoteListScreen from './screens/NoteListScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import AddNewScreen from './screens/AddNewScreen';
import UpdateScreen from './screens/UpdateScreen';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='NoteListScreen'>
        <Stack.Screen name="NoteListScreen" component={NoteListScreen} />
        <Stack.Screen name='AddNewScreen' component={AddNewScreen} />
        <Stack.Screen name='UpdateScreen' component={UpdateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack