import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Home} from './pages/Home'
import {Passwords} from './pages/Passwords'

import {Ionicons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export function Routes () {
    return (
        <Tab.Navigator>
            <Tab.Screen
              name='home'
              component={Home}
              options={{
                headerShown: false,
                tabBarIcon: ({focused, size, color}) => {
                    if(focused) {
                        return <Ionicons size={size} color={color} name="Home" />
                    }
                    return <Ionicons size={size} color={color} name="home-outline" />
                }}
              }
            />

            <Tab.Screen
              name='Passwords'
              component={Passwords}
              options={{
                headerShown: false,
                tabBarIcon: ({focused, size, color}) => {
                    if(focused) {
                        return <Ionicons size={size} color={color} name="lock-closed" />
                    }
                    return <Ionicons size={size} color={color} name="lock-closed-outline" />
                }}
              }
            />

        </Tab.Navigator>
    )
}

// export default Routes