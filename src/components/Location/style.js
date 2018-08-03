import { Dimensions, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

var left1=-90+width/2;
var left2=-70+width/2;
var left3=-50+width/2;
var left4=-37.5+width/2;
var left5=-60+width/2;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    height: height,
    width:width,
    zIndex:0,
  },
  redbox: {
    
    backgroundColor: '#333',
    zIndex: 1,
    width:width,
    height:height
  },
  headerStyle: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: '100',
    
  },
  elementsContainer: {
    alignSelf: 'stretch',
    backgroundColor: '#ecf5fd'
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  submitButtonText: {
    top:10,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center', 
    alignItems: 'center' ,
    fontWeight:'bold',
    fontFamily: 'Roboto',
    fontSize:20,
    height:60,
    
  },


  /*sosicone:{
    position:'absolute',
    bottom:100,
    right:20,
    zIndex:3,

  },*/

  vide:{
    backgroundColor:'#600',
    flex:1,
   
  },

  submitSos:{
    
  
    position:'absolute',
    height:60,
    width:width-10,
    bottom:45,
    zIndex:2,
    backgroundColor:'#E54188',
    borderRadius:20,
    alignSelf: 'center',
    alignContent: 'center',
    
  },


  burgerMenu:{

  width: 70, 
  height: 70,
  position:'absolute',
  top:22,
  left:7,
  zIndex:3,
  },


// vibration styles start here 

  containerVibrate:{
      height:height,
      width:width,
      backgroundColor:'#F22277',
      zIndex:0,
      
  },


  circle1: {

    position:'absolute',
    top:150,
    left:left1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex:1,
    width: 180,
    height: 180,
    borderRadius: 180/2,
    backgroundColor: 'red'
},

circle2: {

  position:'absolute',
  top:170,
  left:left2,
  zIndex:2,
  width: 140,
  height: 140,
  borderRadius: 150/2,
  backgroundColor: 'green'
},

circle3: {

  position:'absolute',
  top:190,
  left:left3,
  width: 100,
  height: 100,
  borderRadius: 100/2,
  backgroundColor: 'blue',
  zIndex:3,
},

circle4: {

  position:'absolute',
  top:200,
  left:left4,
  width: 75,
  height: 75,
  borderRadius: 75/2,
  backgroundColor: 'green',
  zIndex:4,
},


warningImage:{
  position:'absolute',
  width:120,
  height:120,
  top:185,
  left:left5,
  zIndex:5,

},

submitButtonTextVibreur:{

  top:10,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center', 
    alignItems: 'center' ,
    fontWeight:'bold',
    fontFamily: 'Roboto',
    fontSize:20,
    height:60,

},


submitSosVibreur:{
position:'absolute',
height:60,
width:width-10,
bottom:55,
zIndex:2,
backgroundColor:'#459188',
borderRadius:20,
alignSelf: 'center',
alignContent: 'center',
},


});
export default styles;
