import React from 'react'
import {Text,View,TextInput,TouchableOpacity,StyleSheet} from 'react-native'
import {addCardAsync} from '../utils/api'
import {purple,white,gray} from '../utils/colors'
class AddCard extends React.Component{
    static navigationOptions={title:'Add Card'}
    state={
         question:'',
         answer:''
    }
    addCard=()=>{
        let deckId=this.props.navigation.state.params.deckId
         addCardAsync(deckId,this.state).then(results=>this.props.navigation.navigate('DeckView',{entryId:results[deckId]}))
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Enter Question</Text>
                <TextInput style={styles.input}   onChangeText={(text) => this.setState((cs)=>({question:text,answer:cs.answer}))} value={this.state.question}></TextInput>
                <Text style={styles.text}>Enter Answer</Text>
                <TextInput style={styles.input} onChangeText={(text) => this.setState((cs)=>({question:cs.question,answer:text}))} value={this.state.answer}></TextInput>
                <TouchableOpacity style={styles.button}onPress={this.addCard}>
                <Text style={styles.buttonText}>Submit</Text>
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
export default AddCard;
