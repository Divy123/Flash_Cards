import React from 'react'
import { View, Text, StyleSheet,TouchableHighlight,ScrollView} from 'react-native'
import {  getDecks } from '../utils/api'
import {white,purple,lightPurp} from '../utils/colors'
class DeckList extends React.Component {
    state = {
        decks: {}
    }
   componentDidMount(){
       getDecks().then(results=>this.setState({decks:results}))
   }
    render() {
        const { decks } = this.state
        if (Object.keys(decks).length) {
            return (
                <ScrollView>
                    <View style={styles.container}>
                  {
                      Object.keys(decks).map(deck=>
                        <TouchableHighlight key={deck} onPress={()=>this.props.navigation.navigate('DeckView',{entryId:decks[deck]})} >
                       <View  style={styles.piece}>
                         <Text style={styles.textStyle} >{deck}</Text>
                         <Text style={styles.textStyle1}>{decks[deck].questions.length} cards</Text>
                       </View>
                       </TouchableHighlight>
                       )
                  }
                </View>
                </ScrollView>
            )
           
        }
        else return null
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center'
    },
    piece:{
        backgroundColor:'#eff5ff',
        marginBottom:4,
        padding:40,
        borderRadius:5
    },
    textStyle:{
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold',
        color:'#172b4c',
        marginBottom:3
    },
    textStyle1:{
        textAlign:'center',
        fontSize:17,
        fontWeight:'bold',
        color:'#8999ff'
    }

});

export default DeckList;