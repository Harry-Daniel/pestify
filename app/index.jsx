import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
        <View>
      <Text>Random Quote</Text>
      <Text>Let's detect some pests</Text>
        </View>
        <View>
           <Text> Capture</Text>
        </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flexGrow:1,
        justifyContent:'center',
        alignItems:'center'
    }
})