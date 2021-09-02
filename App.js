import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Platform, SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import List from './components/List';
import { ArrowUpCircle } from "react-native-feather";


const image = { uri: "http://placekitten.com/200/100" };

const App = () => {

  const ArrowIcon = () => {
    return  <ArrowUpCircle stroke="#ffff" fill="rgba(192,192,192,0.1)" width={50} height={50} />;
  };

  return (
    <SafeAreaView style={styles.droidSafeArea}>

      <View style={styles.container}>

        {/* <ImageBackground source={image} resizeMode="cover" style={styles.image_bg}>
            <Text style={styles.text}>Inside</Text>
        </ImageBackground> */}

        <View style={[styles.header, {} ]}>

        {/* <ImageBackground source={image}  style={styles.image_bg}>

            <View style={styles.labelBg}>
              <Text style={styles.label}>Homeless Kittens</Text>
            </View>

        </ImageBackground> */}

        <Image source={image}  style={styles.image_bg}/>

            <View style={styles.labelBg}>
              <Text style={styles.label}>Homeless Kittens</Text>
            </View>

      <View style={styles.iconBox}>
      <ArrowIcon/>
      </View>

      </View>

        <List />
        <View style={styles.footer}></View>
      </View>
      <StatusBar style="auto" />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#1D2127',
  },
  droidSafeArea: {
    flex: 1,
    backgroundColor: '#ccc',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  header:{
    padding:10,
    flexBasis:300,
    backgroundColor:'#202126',
  },
  image_bg: {
    flex: 1,
    justifyContent: "center",
    height: 280,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 70,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  label: {
    color:'white',
    textAlign: "center",
    fontSize: 24,
    marginTop: 8,
  },
  iconBox:{
    position:'absolute',
    alignSelf:'flex-end',
    width: 70,
    height: 70,
    backgroundColor:'',
    marginTop: 20,
    marginRight: 10,
  }, 
  labelBg:{
    position:'absolute',
    width:200,
    backgroundColor:'#2E84FF',
    height:50,
    top:'74%',
    left:'5',
  },
});

export default App;