import React from "react";
import {LOGIN_URL} from '../config/URL'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Touchable
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
export default class SignInComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            check_textInputChange:false,
            password:'',
            email:'',
            secureTextEntry:true
        }
    }
    TextInputChange(value){

        if(value.length!==0){
          this.setState({
              check_textInputChange:true,
              email:value
          }); 
        }else{
            this.setState({
                check_textInputChange:false
            }); 
        }
    }
    secureTextEntry(){
        this.setState({
            secureTextEntry: !this.state.secureTextEntry
        })
    }
    login=async()=>{
        await fetch(LOGIN_URL,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                
            },
            body:JSON.stringify({
                "email":this.state.email,
                "password":this.state.password,
                })
        }).then(res=>res.json()).then(resData=>{
            if(resData.response){
                alert("BIENVENIDO A RETAIL SYSTEM");
            }else{
                alert("CORREO O CONTRASEÑA INVALIDOS");
            }
            
        })
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text_header}>Bienvenidos</Text>
                </View>
                <Animatable.View
                 animation="fadeInUpBig"
                 style={styles.footer}>
                    <Text style={styles.text_footer}>E-MAIL</Text>
                    <View style={styles.action}> 
                        <FontAwesome
                            name="user-o"
                            color='#05375a' 
                            size={20}
                        />

                        <TextInput
                            placeholder="ejemplo@ejemplo.com"
                            style={styles.textInput}
                            value={this.state.email}
                            
                            onChangeText={(text)=>this.TextInputChange(text)}
                        />
                        {this.state.check_textInputChange?
                        <Animatable.View
                        animation="bounceIn">
                        <Feather
                            name="check-circle"
                            color="green"
                            size={20}
                        />
                        </Animatable.View>
                        :null}
                        
                        

                        
                    </View>

                    <Text style={[styles.text_footer,{
                        marginTop:35
                        }]}>CONTRASEÑA</Text>
                    <View style={styles.action}> 
                        <Feather
                            name="lock"
                            color='#05375a' 
                            size={20}
                        />
                        {this.state.secureTextEntry?
                        <TextInput
                            placeholder="Contraseña"
                            secureTextEntry={true}
                            style={styles.textInput}
                            value={this.state.password}
                            onChangeText={(text)=>this.setState({
                            password:text
                            })}
                       />
                       :  
                       <TextInput
                            placeholder="Contraseña"
                            secureTextEntry={false}
                            style={styles.textInput}
                            value={this.state.password}
                            onChangeText={(text)=>this.setState({
                            password:text
                       })}
                       />
                       }
                     
                        <TouchableOpacity onPress={()=>this.secureTextEntry()}>
                            {this.state.secureTextEntry?
                            <Feather
                                name="eye-off"
                                color="gray"
                                size={20}
                            /> 
                             :
                            <Feather
                                name="eye"
                                color="gray"
                                size={20}
                            /> 
                             } 
                        </TouchableOpacity>    
                    </View>
                    <Text style={{color:'#009bd1', marginTop:15}}>Olvido su Contraseña?</Text>
                    <View style={styles.button} >
                        <LinearGradient 
                            colors={['#5db8fe', '#39cff2']} 
                            style={styles.signIn}>
                         <TouchableOpacity onPress={()=>this.login()} style={[styles.signIn,{
                            borderColor:'#4dc2f8',

                         }]}>
                            <Text style={[styles.textSign,{
                                color:'white'
                            }]}>Iniciar Sesión</Text>

                         </TouchableOpacity>         
                        </LinearGradient>


                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("SignUpScreen")} style={[styles.signIn,{
                            borderColor:'#4dc2f8',
                            borderWidth:1,
                            marginTop:15
                        }]}>
                            <Text style={[styles.textSign,{
                                color:'#4dc2f8'
                            }]}>Regístrate</Text>

                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View>  
        )
    }
}
var styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#05375a'
    },
    header:{
        flex:1,
        justifyContent:'flex-end',
        paddingBottom:50,
        paddingHorizontal:20
    },
    footer:{
        flex:3,
        backgroundColor:'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:30,
        paddingHorizontal:20
    },
    text_header:{
        color:'white',
        fontWeight:'bold',
        fontSize:30
    },
    text_footer:{
        color:'#05375a',
        fontSize:18
    },
    action:{
        flexDirection: 'row',
        marginTop:18,
        borderBottomWidth:1,
        borderBottomColor:'#f2f2f2',
        paddingBottom:5
    },
    textInput:{
        flex:1,
        paddingLeft:30,
        color:'#05375a'

    },
    button:{
        alignItems:'center',
        marginTop:58
    },
    signIn:{
        width:'100%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    textSign:{
        fontSize:18,
        fontWeight:'bold'

    }
    
    });