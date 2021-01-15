import React from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Dimensions,
    TouchableOpacity,
    Touchable
} from "react-native"
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
export default class SplashComponent extends React.Component{
    render(){
        return(
            <View style={styles.container} >
                <StatusBar barStyle="light-content" />
                <View style={styles.header}> 
                <Animatable.Image
                animation="bounceIn"
                duration={150}
                source={require('./asset/logo.png')}
                style={styles.logo}
                resizeMode={"stretch"}
                />
                </View>
                <View style={styles.footer}> 
                    <Animatable.View style={styles.footer} animation="fadeInUpBig">
                        <Text style={styles.title}>Todos estamos conectados</Text>
                        <Text style={styles.text}>Inicia Sesion con tu cuenta</Text> 
                        <View style={styles.button}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate("SignInScreen")}>
                                    <LinearGradient 
                                    colors={['#5db8fe', '#39cff2']} 
                                    style={styles.signIn}>
                                
                                        <Text style={styles.textSign} >Comencemos!</Text>
                                        <MaterialIcons
                                            name="navigate-next"
                                            color="white"
                                            size={20}
                                        />
                                    </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </Animatable.View>   
                </View>
            </View>
        )
    }
}
const {height} =Dimensions.get("screen");
const height_logo=height * 0.7 * 0.4;
var styles= StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'#05375a'
},
header:{
    flex:2,
    justifyContent:'center',
    alignItems:'center'
},
footer:{
    flex:1,
    backgroundColor:'white',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingVertical:30,
    paddingHorizontal:50
},
logo:{
    width: height_logo,
    height:height_logo
},
title:{
    color:"gray",
    fontWeight:'bold',
    fontSize:30
},
text:{
    color :'gray',
    marginTop:5
},
button:{
    alignItems:'flex-end',
    marginTop:30
},
signIn:{
    width:150,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
    flexDirection:'row'
},
textSign:{
    color:'white',
    fontWeight:'bold'
}

});