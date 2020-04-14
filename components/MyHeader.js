import React from 'react';
import { StyleSheet, Text, View ,Image, Button,ScrollView} from 'react-native';
import { Appbar } from 'react-native-paper';

const MyHeader = ()=>{
    return(
        <Appbar.Header>
        <Appbar.Content
          title="Weather App"
          subtitle="Select City"
          style={{alignItems:'center'}}
        />
        
      </Appbar.Header>
    )
}
export default MyHeader