import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

export default class HomeScreen extends React.Component {
    
   onPressLearnMore() {
     alert('Hello');
   }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          HOME
        </Text>
        <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
       <View>
       <Button 
          onPress={this.onPressLearnMore}
          title="Click Me"
          color="#841584"
        />
        </View>
      </View>
      

    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
    marginBottom: 75,
  },
  
});
