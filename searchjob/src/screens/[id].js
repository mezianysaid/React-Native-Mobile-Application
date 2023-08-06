import React,{useCallback,useState, } from 'react'
import { 
    View, Text,Image,
   SafeAreaView, ScrollView,RefreshControl, StyleSheet, TouchableOpacity
} from 'react-native'
import { useNavigate } from 'react-router-dom'
import useFetchData from '../hooks/useFetchData'
import { useSearchParams , useParams} from 'react-router-native'
import { MD2Colors, ActivityIndicator , Divider, Button} from 'react-native-paper'

import { About, Responsibilites, Qualifications } from './MoreDetails'

export default JobDetails=()=>{
    const navigateTo=useNavigate();
    const params = useParams()
    const [color, setColor] = useState('oldlace')
    const [activeTab, setactiveTab] = useState("About")
    const { data, error,isLoading } = useFetchData('job-details',{job_id:params.id});
    // console.log('job details:==>', data[0])
    const displayTabContent = () => {
      switch (activeTab) {
        case "About":{
          // setColor('red')
          return <About
          title="About"
          info={data[0].job_description ?? "No Data Description"}
          />
        }             
        case "Qualifications":
          return <Qualifications
           title="Qualifications"
           points={data[0].job_highlights?.Qualifications ?? ['N/A']}
          />
        case "Responsibilites":
          return <Responsibilites
          title="Qualifications"
          points={data[0].job_highlights?.Qualifications ?? ['N/A']}
          />
        default:
          return <About
          title="Qualifications"
          points={data[0].job_highlights?.qualifications ?? ['N/A']}
          />
      }
    }
    return( 
       <SafeAreaView style={{flex:1, backgroundColor: MD2Colors.lightDark100}}>
        <Text style={{fontSize:20,fontWeight:'500', alignSelf:'center'}}>Job Details :</Text>
        
         {isLoading ? (
                <ActivityIndicator size='60' color={MD2Colors.amber300} style={{margin:30}} />
              ): error ?(
                <Text>Something went wrong !!!!</Text>
              ):data.length === 0 ?(
                <Text style={{fontSize:20,fontWeight:'500'}}>No Data</Text>
              ):(
                <View>
                <View style={{ justifyContent:'center', alignItems:'center', alignContent:'center'}}>
                <Image source={require('../assets/login1.jpg')} style={{maxWidth:200, maxHeight:200, alignSelf:'center'}} />
                <Text style={{fontSize:20, fontWeight:500, color:'black'}}>
                    {data[0]['job_title']}
                    </Text>
                    <Text style={{fontSize:20, fontWeight:500,}}>
                    {data[0]['employer_name']}/{data[0]['job_country']}
                    </Text>
                    </View>
                    <Divider/>
              <View>
  
              <View style={Styles.BtnView}>
             <TouchableOpacity  onPress={()=>setactiveTab("About")} >
             <Button mode='outlined' focusable={true}  uppercase={true}   
             style={{
                    backgroundColor: `${color}`,                    
                    alignSelf: 'flex-start',
                    // marginHorizontal: '1%',
                    borderBottomEndRadius:5,
                    borderTopStartRadius:5,                                    
                    textAlign: 'center',}} >
                      <Text style={{color:'black',}}>About</Text></Button></TouchableOpacity>
             <TouchableOpacity  onPress={()=>setactiveTab("Qualifications")}>
             <Button mode='outlined' style={{ 
                    borderBottomEndRadius:5,
                    borderTopStartRadius:5,
                    backgroundColor: `${color}`,alignSelf: 'center',
                    // marginHorizontal: '1%',
                    textAlign: 'center',}} ><Text  style={{color:'black',}}>Qualifications</Text></Button></TouchableOpacity>
             <TouchableOpacity  onPress={()=>setactiveTab("Responsibilites")}>
             <Button mode='outlined' style={{ borderBottomEndRadius:5,
                     borderTopStartRadius:5,backgroundColor:color? color :'oldlace' ,
                    //  marginHorizontal: '1%',
                    textAlign: 'center',alignSelf:'flex-end'}} ><Text style={{color:'black',}}>Responsibilites</Text></Button></TouchableOpacity>
            </View>
            </View>
               <Divider/>
            <View style={{marginTop:10}}>
              {displayTabContent()}
            </View>

                </View>
                
                )}
       </SafeAreaView>
    )
}

const Styles=StyleSheet.create({
    BtnView:{
        // padding:10,
       flexDirection:'row',
       flexWrap:'wrap',
    marginLeft:10,
    justifyContent:'space-between'        
    },


})