import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native'
import {purple,white} from '../utils/colors'
class DeckView extends React.Component{
    static navigationOptions=({navigation})=>
       ({ title:navigation.state.params.entryId.title,})
    nav=()=>{
        this.props.navigation.navigate('AddCard',{deckId:this.props.navigation.state.params.entryId.title});
    }
    start=()=>{
        this.props.navigation.navigate('Quiz',{entryId:this.props.navigation.state.params.entryId})
    }
    render(){
        const deck=this.props.navigation.state.params.entryId
       
        return(
            <View style={styles.container}>
                <Text style={styles.textStyle}>{deck.title}</Text>
                <Text style={styles.textStyle1}>{deck.questions.length} cards</Text>
                <TouchableOpacity style={styles.button} onPress={()=>this.start()}>
                <Text style={styles.buttonText}>Start Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>this.nav()}>
                <Text style={styles.buttonText}>Add Card</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        paddingTop:40
    },
    textStyle:{
        textAlign:'center',
        fontSize:40,
        fontWeight:'bold',
        color:'#172b4c',
        marginBottom:35
    },
    textStyle1:{
        textAlign:'center',
        fontSize:18,
        color:'#8999ff',
        paddingBottom:120
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
 
})
export default DeckView