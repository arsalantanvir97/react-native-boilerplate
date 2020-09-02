import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Screens
import Policy from './Policy';
import About from './About';
import Feedback from './Feedback';
import DrawerContent from '../../components/Drawer';


const Drawer = createDrawerNavigator();

const MainFlow = (props) => {
    return (
        <Drawer.Navigator headerMode="none" drawerContent={props => <DrawerContent {...props} logout={() => props.navigation.navigate('AuthFlow')} />}>
            <Drawer.Screen name="feedback" component={Feedback} />
            <Drawer.Screen name="about" component={About} />
            <Drawer.Screen name="policy" component={Policy} />
        </Drawer.Navigator>
    )
}

export default MainFlow