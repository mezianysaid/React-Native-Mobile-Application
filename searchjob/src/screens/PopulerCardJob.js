import React,{useEffect,useState} from "react";
import { StyleSheet ,View,Text, TouchableOpacity, Image, } from "react-native";
import { MD2Colors, Card } from "react-native-paper";
import login1 from '../assets/login1.jpg'
// import { checkImaheUrl } from "../hooks/_checkImageUrl";
export  default PopulerCardJob = ({item}) => {
    return(
        <>
        <View>
            <Card style={Styles.touchView} >
          <TouchableOpacity >
            <TouchableOpacity>
                <Image source={require('../assets/login1.jpg')} resizeMode="contain" style={{ width:160, height:200}} />
            </TouchableOpacity>
            <Text style={{fontSize:20, fontWeight:'500'}} numberOfLines={1}> {item.employer_name} </Text>

            <View style={Styles.Info}>
                <Text style={{fontSize:20, fontWeight:'500', color:'black'}} numberOfLines={1}>{item.job_title}</Text>
            </View>
            <View>
            <Text style={{fontSize:20, fontWeight:'500', color:MD2Colors.amberA400}} numberOfLines={1}>{item.job_country}</Text>

            </View>
          </TouchableOpacity>
          </Card>
        </View>
        </>
    )
}

const Styles=StyleSheet.create({
    touchView:{
        width:180,
        // height:250,
        borderRadius:30,
        justifyContent:'center',
        // alignItems:"center",
        justifyContent:'space-between-10',
        marginTop:10,
        padding:10,
    }
})