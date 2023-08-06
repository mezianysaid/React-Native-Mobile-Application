/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextBase,
  useColorScheme,
  View,
  DrawerLayoutAndroid,
  FlatList, 
  TouchableOpacity,  
} from 'react-native';

import {
  Colors,
  
} from 'react-native/Libraries/NewAppScreen';

import {Provider as PaperProvider} from 'react-native-paper'
import {NativeRouter} from 'react-router-native'
import { ThemeProvider } from 'react-native-elements';
import { Appbar,Button,Card, Avatar } from 'react-native-paper';

import  {useNavigate}  from 'react-router-dom';
import NavigationScreens from './src/screens/NavigationScreens';
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Home",
    link :'/'
  },
  {
    id: "58694a0f-3da1-471f-bd96-1571dse29d72",
    title: "Weather",
    link :'/CityWeather'
  }, 
  {
    id: "58694a0f-3da1-471f-bd96-145es57wsed1e2",
    title: "Sign In",
    link :'/Signin'
  },
  {
    id: "58694a0f-3da1-471f-bd9f6-14557wsed1e2",
    title: "Sign Up",   
    link :'/Signup'
  },
  {
    id: "58694a0f-3da1-471f-bd96-14557wsed1e2",
    title: "Contact Us", 
    link :'/Contactus'
  }
];
const Item = ({ item, onPress}) => (
  <TouchableOpacity onPress={onPress} style={[styles.list]}>
    
    <View  className='m-2'>        
      <Button         
         title={item.title}         
         onPress={onPress}
        //  mode='contained'
         mode='elevated'
         style={{backgroundColor:'white', height:50, borderRadius:50}}
       > <Text style={{color:'black',fontSize:18,fontWeight:'600'}}>{item.title} </Text> </Button>        
     </View>
    
  </TouchableOpacity>
);
const App=()=>{
  const isDarkMode = useColorScheme() === 'dark';
  const linkTo=useNavigate()
 

  const [selectedId, setSelectedId] = useState(null)
  const drawer = useRef(null)
  const [drawerPosition, setDrawerPosition] = useState("left");
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const renderItem = ({ item }) => {
   
    return (
      <Item       
        item={item}
        onPress={() => {  
          linkTo(item.link)
          setSelectedId(item.id)
          drawer.current.closeDrawer()
        }
        }
        // backgroundColor={{ backgroundColor }}
        // textColor={{ color }}
      />
    );
  };
  const navigationView = () => (
    <View style={[styles.navigationContainer]}>
      {/* <ImageBackground source={w8} resizeMode="cover" style={{height:800}} > */}
        {/* <View style={{alignItems:'center', flexDirection:'row', marginTop:10}}> */}
        {/* <Avatar.Image  size={60} source={nam} />           */}
        {/* <Text style={{fontSize:30, fontWeight:'600', color:'white', paddingLeft:5}}>Meziany Said</Text> */}
          
        {/* </View>        */}
       
      <SafeAreaView  >
        
          <FlatList
            data={DATA}
            className='m-4'
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
            
          /> 
       
    </SafeAreaView>
    {/* </ImageBackground> */}
    </View>
  );
  return (
    <>
    
       
   {/* //////////////////////////////////////// */}
   <StatusBar
        barStyle={isDarkMode ? 'dark-content' : 'light-content'}
        backgroundColor="#facc15"
      />
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={280}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
      style={styles.navigationContainer}
     >
      
      <SafeAreaView>  
       
      <Appbar.Header style={{ backgroundColor:'#facc15'}}>
      
        <Appbar.BackAction onPress={() => linkTo(-1)} />
        <Appbar.Content title="Welcome to our store" />
        <Appbar.Action icon="menu" size={30} onPress={() => drawer.current.openDrawer()} />
     
      </Appbar.Header> 
     
   {/* //////////////////////////////////////// */}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <SafeAreaView style={backgroundStyle}> 
        <View
          style={{
            backgroundColor: '#e2e8f0',
          }}>
          
          <NavigationScreens/>
        </View>
        </SafeAreaView>
      </ScrollView>
      </SafeAreaView>
      </DrawerLayoutAndroid>
         
    </>
  );
}
const main=()=>{
  return(
    <>
    <PaperProvider>
      <ThemeProvider>
      <NativeRouter>
         
               <App/>                    
          
        </NativeRouter>
      </ThemeProvider>
    </PaperProvider>
    </>
  )
        
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  navigationContainer:{
    backgroundColor:'#e2e8f0',
    // #6d28d9
    
  },
  list:{
    margin:10,  
    fontSize:30,
    fontWeight:'600' 
  }
});

export default main;
