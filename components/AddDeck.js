import React from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { saveNewDeck } from '../utils/api'
import {white,purple,gray} from '../utils/colors'
import {getDecks} from '../utils/api'
class AddDeck extends React.Component {
    state = {
        text: ''
    }
    submitDeck = () => {
        const deck=this.state.text
        saveNewDeck(this.state.text);
        this.setState({ text: '' })
        getDecks().then(results=>this.props.navigation.navigate('DeckView',{entryId:results[deck]}))
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Enter the name of Deck..</Text>
                <TextInput style={styles.input} onChangeText={(text) => this.setState({ text })} value={this.state.text}></TextInput>
                <TouchableOpacity style={styles.button} onPress={this.submitDeck} padding={10}>
                    <Text style={styles.buttonText}>Create Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    input:{
        width:200,
        height:44,
        padding:8,
        borderWidth:1,
        borderColor:'#757575',
        margin:50,
        borderRadius:8
    },
    button:{
        backgroundColor:purple,
        padding:10,
        paddingLeft:30,
        paddingRight:30,
        height:45,
        borderRadius:6,
        marginBottom:28
    },
    buttonText:{
        color:white,
        fontSize:22,
        textAlign:'center'
    },
    text:{
        color:gray,
        fontSize:28,
    }
})
export default AddDeck;