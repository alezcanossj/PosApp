import React from "react";
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
export default class SignUpComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            check_textInputChange:false,
            password:'',
            password_confirm:'',
            secureTextEntry:true,
            secureTextEntry_confirm:true
        }
    }
    TextInputChange(value){
        if(value.length!==0){
          this.setState({
              check_textInputChange:true
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
    secureTextEntry_confirm(){
        this.setState({
            secureTextEntry_confirm: !this.state.secureTextEntry_confirm
        })
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text_header}>Registrate</Text>
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
                    <Text style={[styles.text_footer,{
                        marginTop:35
                        }]}>CONTRASEÑA</Text>
                    <View style={styles.action}> 
                        <Feather
                            name="lock"
                            color='#05375a' 
                            size={20}
                        />
                        {this.state.secureTextEntry_confirm?
                        <TextInput
                            placeholder="Confirmar Contraseña"
                            secureTextEntry={true}
                            style={styles.textInput}
                            value={this.state.password_confirm}
                            onChangeText={(text)=>this.setState({
                            password_confirm:text
                            })}
                       />
                       :  
                       <TextInput
                            placeholder="Confirmar Contraseña"
                            secureTextEntry={false}
                            style={styles.textInput}
                            value={this.state.password_confirm}
                            onChangeText={(text)=>this.setState({
                            password_confirm:text
                       })}
                       />
                       }
                     
                        <TouchableOpacity onPress={()=>this.secureTextEntry_confirm()}>
                            {this.state.secureTextEntry_confirm?
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
                    <View style={styles.textPrivate}>
                        <Text style={styles.color_textPrivate}>
                           Iniciando sesión aceptas nuestros
                        </Text>
                        <Text style={[styles.color_textPrivate,{
                            fontWeight:'bold'
                        }]}>
                           Terminos de servicios
                        </Text>

                        <Text style={[styles.color_textPrivate,{
                            fontWeight:'bold'
                        }]}>
                           {" "}
                           y
                        </Text>
                        <Text style={[styles.color_textPrivate,{
                            fontWeight:'bold'
                        }]}>
                           {" "}
                           Politicas de privacidad
                        </Text>
                    </View>
                   
                    <View style={styles.button}>
                        <LinearGradient 
                            colors={['#5db8fe', '#39cff2']} 
                            style={styles.signIn}>
                            <Text style={[styles.textSign,{
                                color:'white'
                            }]}>Iniciar Sesión</Text>
                        </LinearGradient>
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

    },
    textPrivate:{
     flexDirection:'row',
     flexWrap:'wrap',
     marginTop:20 
    },
    color_textPrivate:{
        color:'gray'
    }
    
    });