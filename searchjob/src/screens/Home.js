import React,{useEffect,useState} from 'react'
import { Button ,  MD2Colors } from 'react-native-paper'

import {View, Text,StyleSheet, TouchableOpacity} from 'react-native'
import {useNavigate} from 'react-router-dom'
import { SearchBar } from 'react-native-elements';
import PopularJpbs from './PopulerJobs'
import NearByJob from './NearByJob';
export default Home =()=>{
    const [search, setSearch]=useState(null)
    const navigateTo = useNavigate();
    return(
        <View >
         
            <View>
               <Text style={Styles.username}>
                Hello Said
               </Text>
               <Text style={Styles.JobTitle}>Find Your Perfect Job </Text>
             </View>
             <View style={Styles.searchView}>
             <SearchBar
                   round
                   searchIcon={{ size: 24 }}
        //   onChangeText={(text) => searchFilterFunction(text)}
        //   onClear={(text) => searchFilterFunction('')}
                    placeholder="Type Here..."
                     value={search}                    
                containerStyle={{backgroundColor:'#e2e8f0'}}
                inputContainerStyle={{backgroundColor:'oldlace'}}
                style={{borderBottomColor:'#e2e8f0', color:'black', borderRadius:5}}                
        />
             </View>

            <View style={Styles.BtnView}>
             <Button mode='outlined'  style={{
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '2%',
    borderBottomEndRadius:5,
    borderTopStartRadius:5,
    textAlign: 'center',}} ><Text>Full-time</Text></Button>
             <Button mode='outlined' style={{ borderBottomEndRadius:5,
    borderTopStartRadius:5,backgroundColor: 'oldlace',alignSelf: 'center',marginHorizontal: '2%',
    textAlign: 'center',}} ><Text>Part-time</Text></Button>
             <Button mode='outlined' style={{ borderBottomEndRadius:5,
    borderTopStartRadius:5,backgroundColor: 'oldlace',marginHorizontal: '2%',
    textAlign: 'center',alignSelf:'flex-end'}} ><Text>Contractor</Text></Button>
            </View>
        <View style={{margin:10}}>
        <PopularJpbs/>
        <NearByJob/>
        </View>
                {/* <TouchableOpacity onPress={()=>navigateTo('/rachargeType')} > 
                <Button mode='elevated' style={Styles.button }><Text style={{fontSize:20, fontWeight:'500',color:'white'}}>Recharge</Text> </Button>
                </TouchableOpacity> */}
               
               
        {/* </View> */}
        </View>
    )
}
const Styles = StyleSheet.create({
    Box:{           
        justifyContent:'center',
        alignContent:'center',        
        marginTop:'50%'               
    },
    button:{
        margin:10,height:70,justifyContent:'center',alignContent:'center',                     
        shadowColor:'#8b5cf6',              
        borderBottomEndRadius:5,
        borderTopStartRadius:5,
        backgroundColor:'#4338ca',
    },
    touch:{
        borderBottomColor:'red',
        borderBottomWidth:5
    },
    username:{
        marginTop:30,
        marginLeft:30,
        fontSize:20,
        fontWeight:'400'
    },
    JobTitle:{
        marginLeft:30,
        fontSize:30,
        fontWeight:'500',
        color:'black'
    },
    searchView:{
        padding:20,
        borderBottomColor:'#e2e8f0',
        borderRadius:5,
    },
    BtnView:{
        padding:10,
       flexDirection:'row',
       flexWrap:'wrap',
    //    justifyContent:'center',
       letterSpacing:5,
       
        
    }

})