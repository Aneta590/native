
import React from 'react';
import { StyleSheet, Image, FlatList, View, Text } from 'react-native';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      countries:[]
    }

    this.renderItem = this.renderItem.bind(this);
  }

  async componentDidMount(){
    console.log('infos')
    try{
    const info = await fetch('http://restcountries.eu/rest/v2/all')
    console.log(info)
    const result= await info.json()
    console.log(result)
    this.setState({countries:result})
  }catch(error){
    console.log(error)
  }
} 

  renderItem({ item }) {
    return (
      <View>
        <Text style={st.container}>{item.capital}</Text>
        <Image
  source={{ uri:item.flag}}
  style={{ width: 100, height: 100, marginLeft:80 }} />
      </View>
      
    );
  }
  

  render() { 
    
    return (
     
      <FlatList
        data={this.state.countries} 
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}      
        />
       
    );
  }
}
const st= StyleSheet.create({
  container:{
    fontSize: 30,
    fontWeight: "bold",
    color: "blue",
    textAlign:'center'
  }
})

export default App;

