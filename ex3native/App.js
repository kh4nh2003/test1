import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button, FlatList } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      number1: '',
      number2: '',
      result: 0,
      history: []
    }
  }

  numInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  plusCal = () => {
    let result = Number(this.state.number1) + Number(this.state.number2);
    let cal = this.state.number1 + ' + ' + this.state.number2 + ' = ' + result;
    this.setState({
      result, 
      history: [...this.state.history, cal]
    });
  }

  minusCal = () => {
    let result = Number(this.state.number1) - Number(this.state.number2);
    let cal = this.state.number1 + ' - ' + this.state.number2 + ' = ' + result;
    this.setState({
      result, 
      history: [...this.state.history, cal]
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Result: {this.state.result}</Text>
        <TextInput style={styles.myInput} keyboardType="number-pad" onChangeText={(number1) => this.setState({number1})} name={this.state.number1} value={this.state.number1} />
        <TextInput style={styles.myInput} keyboardType="number-pad" onChangeText={(number2) => this.setState({number2})} name={this.state.number2} value={this.state.number2} />
        <View style={styles.btnView}>
          <Button color='#fff' onPress={this.plusCal} title='+'/><Button color='#fff' onPress={this.minusCal} title='-'/>
        </View>
        <Text>History</Text>
        <FlatList data={this.state.history} renderItem={({item}) => <Text>{item}</Text>} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  myInput: {
    width: 200,
    borderColor: 'black',
    borderWidth: 1
  },
  btnView: {
    flexDirection: 'row',
    backgroundColor: 'steelblue'
  },
});
