import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import SplashComponent from "./SplashComponent";
import SignInComponent from "./SignInComponent";
import SignUpComponent from "./SignUpComponent";
const StackNaigator= createStackNavigator({
SplashScreen :{
    screen:SplashComponent,
    navigationOptions:{
        headershown: false
    }

},
SignInScreen:{
    screen:SignInComponent,
    navigationOptions:{
        headershown: false
    }
},
SignUpScreen:{
    screen:SignUpComponent,
    navigationOptions:{
        headershown: false
    }
}
});

export default createAppContainer(StackNaigator)