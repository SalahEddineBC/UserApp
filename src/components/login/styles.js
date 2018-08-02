import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },

  firstrow: {
    flex: 1
  },

  secondrow: {
    flex: 1
  },

  thirdrow: {
    flex: 1
  },

  fourthrow: {
    flex: 1
  },
  Button: {
    padding: 10,
    margin: 10,
    height: 50,
    width: 320,
    backgroundColor: '#F24033'
  },
  ButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Arial',
  },
  rows: {
    flexDirection: 'row'
  },
  base: {
    flex: 2
  },
  GoogleButton: {
    backgroundColor: '#F24033'
  },
  icon: {
    height: 11,
    width: 29
  }
});

export default styles;
/*
.Login {
    position: absolute;
    left: 475px;
    top: 767px;
    width: 375px;
    height: 667px;
    z-index: 76;
}
.Header {
    position: absolute;
    left: -475px;
    top: -767px;
    width: 3226px;
    height: 2201px;
    z-index: 75;
}
.Back {
    background-color: rgb(139, 153, 159);
    position: absolute;
    left: 503px;
    top: 800px;
    width: 12px;
    height: 21px;
    z-index: 74;
}
.LOG_IN {
    font-size: 20px;
    font-family: "Roboto";
    color: rgb(0, 0, 0);
    line-height: 1.2;
    text-align: center;
    position: absolute;
    left: 631.871px;
    top: 799px;
    z-index: 73;
}
.Background {
    background-color: rgb(249, 249, 249);
    position: absolute;
    left: 475px;
    top: 767px;
    width: 375px;
    height: 75px;
    z-index: 72;
}
.Log_in_form {
    position: absolute;
    left: -475px;
    top: -767px;
    width: 3226px;
    height: 2201px;
    z-index: 70;
}
.Email {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 3226px;
    height: 2201px;
    z-index: 69;
}
.Email {
    font-size: 14px;
    font-family: "Roboto";
    color: rgb(161, 171, 178);
    font-weight: bold;
    line-height: 1.2;
    text-align: left;
    position: absolute;
    left: 521.937px;
    top: 1047.1px;
    z-index: 68;
}
.Rectangle_3 {
    background-color: rgb(255, 255, 255);
    position: absolute;
    left: 503px;
    top: 1028px;
    width: 320px;
    height: 51px;
    z-index: 67;
}
.Password {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 3226px;
    height: 2201px;
    z-index: 65;
}
.Password {
    font-size: 14px;
    font-family: "Roboto";
    color: rgb(161, 171, 178);
    font-weight: bold;
    line-height: 1.2;
    text-align: left;
    position: absolute;
    left: 521.937px;
    top: 1107.1px;
    z-index: 64;
}
.Rectangle_3_Copy {
    background-color: rgb(255, 255, 255);
    position: absolute;
    left: 503px;
    top: 1088px;
    width: 320px;
    height: 51px;
    z-index: 63;
}
.Sign_in_button {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 3226px;
    height: 2201px;
    z-index: 61;
}
.Log_in {
    font-size: 16px;
    font-family: "Roboto";
    color: rgb(255, 255, 255);
    font-weight: bold;
    line-height: 1.2;
    text-align: center;
    position: absolute;
    left: 635.937px;
    top: 1175.4px;
    z-index: 60;
}
.Rectangle_24 {
    background-color: rgb(255, 70, 48);
    position: absolute;
    left: 503px;
    top: 1158px;
    width: 320px;
    height: 51px;
    z-index: 59;
}
.Forgot_Password_ {
    font-size: 14px;
    font-family: "Roboto";
    color: rgb(161, 171, 178);
    font-weight: bold;
    line-height: 1.2;
    text-align: center;
    position: absolute;
    left: 600.937px;
    top: 1238.85px;
    z-index: 57;
}
.OR {
    font-size: 14px;
    font-family: "Roboto";
    color: rgb(139, 153, 159);
    font-weight: bold;
    line-height: 1.2;
    text-align: center;
    position: absolute;
    left: 176.937px;
    top: 225.6px;
    z-index: 55;
}
.Log_in_with_Facebook {
    position: absolute;
    left: -475px;
    top: -767px;
    width: 3226px;
    height: 2201px;
    z-index: 54;
}
.Log_in_with_Facebook {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 3226px;
    height: 2201px;
    z-index: 53;
}
.Facebook {
    background-color: rgb(255, 255, 255);
    position: absolute;
    left: 522px;
    top: 936px;
    width: 21px;
    height: 21px;
    z-index: 52;
}
.LOG_IN_WITH_FACEBOOK {
    font-size: 14px;
    font-family: "Roboto";
    color: rgb(255, 255, 255);
    font-weight: bold;
    line-height: 1.2;
    text-align: center;
    position: absolute;
    left: 579.938px;
    top: 940.6px;
    z-index: 51;
}
.Background {
    background-color: rgb(67, 97, 156);
    position: absolute;
    left: 503px;
    top: 922px;
    width: 320px;
    height: 50px;
    z-index: 50;
}
.Log_in_with_google {
    position: absolute;
    left: -475px;
    top: -767px;
    width: 3226px;
    height: 2201px;
    z-index: 47;
}
.Log_in_with_google {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 3226px;
    height: 2201px;
    z-index: 46;
}
.Google_ {
    background-color: rgb(255, 255, 255);
    position: absolute;
    left: 518px;
    top: 878px;
    width: 29px;
    height: 19px;
    z-index: 45;
}
.LOG_IN_WITH_GOOGLE {
    font-size: 14px;
    font-family: "Roboto";
    color: rgb(255, 255, 255);
    font-weight: bold;
    line-height: 1.2;
    text-align: center;
    position: absolute;
    left: 587.938px;
    top: 880.6px;
    z-index: 44;
}
.Background {
    background-color: rgb(242, 64, 51);
    position: absolute;
    left: 503px;
    top: 862px;
    width: 320px;
    height: 50px;
    z-index: 43;
}
.Background {
    background-color: rgb(241, 245, 246);
    position: absolute;
    left: 0px;
    top: 1px;
    width: 375px;
    height: 667px;
    z-index: 40;
}
*/
