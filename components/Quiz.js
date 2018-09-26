import React from 'react'
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import {orange,white,gray,red} from '../utils/colors'
import {clearLocalNotification,setLocalNotification} from '../utils/helpers'
class Quiz extends React.Component {
    static navigationOptions = { title: 'Quiz' }
    state = {
        count: 0,
        score: 0,
        view: 'ques'
    }
    render() {

        let ques = this.props.navigation.state.params.entryId.questions
        let max = ques.length
        let {count}=this.state
        if (count !== max) {
            return (
                <View>
                    <Text style={styles.count}>
                        {max - count}/{max}
                    </Text>
                    
                    {
                        (this.state.view === 'ques') ? (
                            <View>
                                <Text style={styles.qa}>{ques[count].question}</Text>
                                <TouchableOpacity onPress={() => this.setState((cs) => ({ view: 'ans', count: cs.count, score: cs.score }))}>
                                    <Text style={styles.view}>View Answer</Text>
                                </TouchableOpacity>
                            </View>
                        ) :( <View>
                            <Text  style={styles.qa}>{ques[count].answer}</Text>
                            <TouchableOpacity onPress={() => this.setState((cs) => ({ view: 'ques', count: cs.count, score: cs.score }))}>
                                <Text style={styles.view}>View Question</Text>
                            </TouchableOpacity>
                        </View>)
                   }
                   <TouchableOpacity style={styles.button}onPress={() => this.setState((cs) => ({ view: cs.view, count: cs.count+1, score: cs.score+1 }))}>
                                <Text style={styles.buttonText}>Correct</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => this.setState((cs) => ({ view: cs.view, count: cs.count+1, score: cs.score }))}>
                                <Text style={styles.buttonText}>Incorrect</Text>
                            </TouchableOpacity>
                    </View>
                
            )
        }
       else{    //quiz is over
        clearLocalNotification().then(setLocalNotification)//user has taken the quiz so reset the notification
        return (
            <View style={styles.Container}>
                <Text style={[styles.qa,{ marginBottom:100}]}>Your score is {this.state.score}</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.setState((cs) => ({ view: cs.view, count: 0, score: 0 }))}>
                                <Text style={styles.buttonText}>Reset Quiz</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() =>this.props.navigation.goBack()}>
                                <Text style={styles.buttonText}>Go Back</Text>
                            </TouchableOpacity>
            </View>
        );
       }
    }
}
const styles=StyleSheet.create({
    Container:{
        flex:1,
        alignItems:'center',
        paddingTop:40,
       
    },
    count:{
        fontSize:20,
        fontWeight:'bold'
    },
    button:{
        backgroundColor:orange,
        
        paddingLeft:20,
        paddingRight:20,
        height:45,
        borderRadius:6,
        marginBottom:28
    },
    buttonText:{
        color:white,
        fontSize:22,
        textAlign:'center',
        
    },
    view:{
        color:red,
        fontSize:20,
        textAlign:'center',
        paddingBottom:100
    },
    qa:{
        fontSize:35,
        color:gray,
        paddingTop:30,
        textAlign:'center',
        paddingBottom:20
    }
});
export default Quiz