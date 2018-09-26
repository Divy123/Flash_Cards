import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { white, purple } from './utils/colors'
import DeckView from './components/DeckView'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
import {setLocalNotification} from './utils/helpers'
const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'DeckList',
      tabBarIcon: ({ tintcolor }) => (<MaterialCommunityIcons name='cards' color={tintcolor} size={30} />)
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintcolor }) => (<FontAwesome name='plus-square' color={tintcolor} size={30} />)
    }
  }
},
  {
    tabBarOptions: {
      activeTintColor: purple,
      style: {
        height: 50,
        backgroundColor: white
      }
    }
  })
const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  },
  Quiz:{
    screen:Quiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  }
})

export default class App extends React.Component {
  componentDidMount(){
    setLocalNotification()
  }
  render() {
    return (
      <MainNavigator />
    )
  }
}
