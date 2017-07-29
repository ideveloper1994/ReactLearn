/**
 * Created by LaNet on 7/24/17.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import ScarletScreen from './scarletScreen';
import GrayScreen from './grayScreen';
import { Router, Scene } from 'react-native-router-flux';


const TabIcon = ({ selected, title }) => {
    return (
        <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
            <View style={{height:15, width:15, backgroundColor: selected ? 'red' :'black'}} />
            <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
        </View>
    );
};

export default class Main extends Component {

    render() {
        return (
           <Router>
               <Scene key="root"
                      hideNavBar={true}>
                   {/* Tab Container */}
                   <Scene
                       key="tabbar"
                       tabs={true}
                       tabBarStyle={{ backgroundColor: '#FFFFFF' }}
                   >
                       {/* Tab and it's scenes */}
                       <Scene key="osu" title="OSU" icon={TabIcon}>
                           <Scene
                               key="scarlet"
                               component={ScarletScreen}
                               title="Scarlet"
                               direction="vertical"
                           />

                           <Scene
                               key="gray"
                               component={GrayScreen}
                               title="Gray"
                               hideTabBar={true}
                           />
                       </Scene>

                       <Scene key="tab1" title="OSU" icon={TabIcon}>

                           <Scene
                               key="gray"
                               component={GrayScreen}
                               title="Gray"
                           />
                           <Scene
                               key="scarlet"
                               component={ScarletScreen}
                               title="Scarlet"
                               direction="vertical"

                           />
                       </Scene>

                       {/* Removed for brevity */}
                   </Scene>
               </Scene>
           </Router>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
