import React,{useEffect,useState} from "react";
import { StyleSheet ,View,Text, TouchableOpacity, Image, } from "react-native";
import { MD2Colors, Card } from "react-native-paper";
import login1 from '../assets/login1.jpg'
import { useNavigate } from "react-router-dom";

export  default NearByJobCard = ({job}) => {
    const navigateTo=useNavigate()
    return(
        <>
        {/* <View > */}
        <Card style={Styles.touchView}  >
        <TouchableOpacity onPress={()=>navigateTo('/job_details/'+`${job?.job_id}`)}>
       
        <View>          
            <TouchableOpacity >
                <Image source={require('../assets/login1.jpg')} resizeMode="contain" style={{ width:50, height:70}} />
            </TouchableOpacity>
        </View>
        <View> 
        <View style={Styles.Info}>
                <Text style={{fontSize:20, fontWeight:'500', color:'black'}} numberOfLines={1}>{job.job_title}</Text>
            </View>
            <View>
            <Text style={{fontSize:20, fontWeight:'500', color:MD2Colors.amberA400}} numberOfLines={1}>{job.job_employment_type}</Text>
            </View>
        </View>
          
          </TouchableOpacity>
          </Card>
        {/* </View> */}
        </>
    )
}

const Styles=StyleSheet.create({
    touchView:{       
        borderRadius:30,        
        marginTop:10,
        display:'flex',
        flexDirection:'row',
       
        flexWrap:'wrap', 
        padding:20,
        
    }
})