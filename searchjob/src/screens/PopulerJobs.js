import React,{useEffect,useState} from 'react'
import { Button ,  MD2Colors } from 'react-native-paper'

import {
  View, Text,StyleSheet, TouchableOpacity, SafeAreaView,
  ActivityIndicator,
  FlatList
} from 'react-native'
import {useNavigate} from 'react-router-dom'
import PopulerCardJob from './PopulerCardJob'

import useFetchData from '../hooks/useFetchData'

export default PopularJpbs = () =>{
  const search='search'
  const parms = {
    query: 'React developer',       
    num_pages: '1'
  }
    const { data, error,isLoading } = useFetchData(search,parms)
    // console.log('data=======================================================\n', data)

    return(
         <SafeAreaView>
          <View style={{flexDirection:'row', flexWrap:'wrap', flexGrow:2, display:'flex'}}>
            <Text style={{fontSize:24, fontWeight:'400'}}>Popular Jobs</Text>
            <View style={{ flex:1, justifyContent:'flex-end', }}>

            
            <TouchableOpacity style={{alignSelf:'flex-end'}}> 
              <Button mode='outlined' buttonColor='#facc15' > 
              <Text style={{color:'black'}}> Show all </Text>
            </Button>
            </TouchableOpacity>
            </View>
            </View>
            {/* Cards Container */}
            <View style={Styles.cardsContainer}>
              {isLoading ? (
                <ActivityIndicator size='large' color={MD2Colors.amber300} style={{margin:30}} />
              ): error ?(
                <Text>Something went wrong !!!!</Text>
              ):(
                <FlatList 
                 data={data}
                 renderItem={({item})=>
                  (
                    <PopulerCardJob item={item} key={item} 
                    
                    />
                  )}
                  // keyExtractor={item=>item?.job_id}
                  contentContainerStyle={{columnGap:10}}
                  horizontal
                />
              )}
            </View>
          
         </SafeAreaView>
    )
}
const Styles =StyleSheet.create({
  cardsContainer:{

  }
})