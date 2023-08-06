import React from 'react'
import { View,Text, StyleSheet} from 'react-native'
import { Card ,CardActions, CardContent, Divider} from 'react-native-paper'


export const About = ({info}) => {
  return (
    <View style={{padding:16}}>    
    <Card style={{padding:15}}>
        {/* <CardActions> */}
        <Text style={Styles.title}> About the Job:</Text>
        <Divider/>
        {/* </CardActions> */}
        <CardContent>
            <Text>{info}</Text>
        </CardContent>
    </Card>
    </View>
  )
}

export const Qualifications = ({title, points}) => {
    return(
        <View style={{padding:10}}>
    <Text style={Styles.title}> {title}: </Text>
    <View style={Styles.points}>
        {points.map((item,index)=>(
            <View key={item+index}>
                <Text style={Styles.sub}>{item}</Text>
            </View>
        ))}

    </View>
        </View>
    )
}

export const Responsibilites = ({title, points}) => {
    return(
        <>
    <Text> Responsibilites </Text>

        </>
    )
}

const Styles = StyleSheet.create({
    title:{
        fontSize:20,
        fontWeight:'500',
        fontFamily:'italic',
        color:'black'
    },
    points:{
        paddingLeft:40,
        paddingTop:20,
      
    },
    sub:{
        start:'*',
        fontSize:20,
        fontWeight:'400',
    //    borderLeftWidth:2,
    }
})