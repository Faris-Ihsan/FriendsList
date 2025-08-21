import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Icon from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{ 
                    title: 'Freunde', 
                    tabBarIcon:(objectParams) => {
                        // const size = objectParams.size;
                        // const color = objectParams.color;
                        const {size, color} = objectParams; // Destrukturierung von Size und Color
                        return (
                            <Icon.Ionicons name='home' size={size} color={color}/>
                        );
                    },
                }}
            />
            <Tab.Screen 
                name="Settings" 
                component={SettingsScreen}  
                options={{ 
                    title: 'Einstellungen', 
                    tabBarIcon:({ size,color }) => <Icon.Ionicons name='settings' size={size} color={color}/> 
                }}
            />
        </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
