import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Screens
import Policy from './Policy';
import About from './About';
import Feedback from './Feedback';
import EditProfile from './EditProfile'
import MeasureSkill from './MeauseSkill'
import ViewResult from './ViewResult'
import BeatThat from './BeatThat'
import SendChallenge from './SendChallenge'
import Challenge from './Challenge'


import DrawerContent from '../../components/Drawer';


const Drawer = createDrawerNavigator();

const MainFlow = (props) => {
    return (
        <Drawer.Navigator headerMode="none" drawerContent={props => <DrawerContent {...props} logout={() => props.navigation.navigate('AuthFlow')} />}>
            <Drawer.Screen name="feedback" component={Feedback} />
            <Drawer.Screen name="measureskill" component={MeasureSkill} />
            <Drawer.Screen name="viewresult" component={ViewResult} />
            <Drawer.Screen name="beatthat" component={BeatThat} />
            <Drawer.Screen name="about" component={About} />
            <Drawer.Screen name="editprofile" component={EditProfile} />
            <Drawer.Screen name="sendchallenge" component={SendChallenge} />
            <Drawer.Screen name="challenge" component={Challenge} />
            <Drawer.Screen name="policy" component={Policy} />
        </Drawer.Navigator>
    )
}

export default MainFlow