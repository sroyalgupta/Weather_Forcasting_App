import React from 'react';
import { StyleSheet, Text, View ,Image, Button,ScrollView} from 'react-native';
import MyHeader from './components/MyHeader'
import { TextInput,Card,List } from 'react-native-paper';


class App extends React.Component{
  state = {
    text: '',
    cities:[]
  };
  fetchCities(text){
    this.setState({text})
    fetch(`http://autocomplete.wunderground.com/aq?query=${text}`)
    .then(data=>data.json())
    .then(city=>{
      this.setState({
        cities: city.RESULTS.slice(0,9)
      })
    })
    console.log(this.state.cities)
  }
  render(){
    renderCity=<Card><List.Item title="no cities"/></Card>
    if(this.state.cities.length>0){
      renderCity = this.state.cities.map(city=>{
        return(
          <Card style={{margin:5}} key={city.lat}>
          <List.Item title={city.name}/>
          </Card>
        )
      })
    }
    return(
      <View style={{flex:1,backgroundColor:'#f4f4f4'}}>
        <MyHeader/>
        <TextInput
        label='Enter your city'
        value={this.state.text}
        onChangeText={text => this.fetchCities(text)}
      />
      <ScrollView>
        {renderCity}
      </ScrollView>
      </View>
    )
  }
}
export default App

const styles = StyleSheet.create({
  container : {
    flex :1
  }
})