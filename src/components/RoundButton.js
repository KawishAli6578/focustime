import React from "react";
import { TouchableOpacity,Text,StyleSheet} from "react-native"
import {Ionicons,AntDesign} from '@expo/vector-icons'

export default function RoundButton({
  style ={},
  textStyle = {},
  size = 125,
  icon,
  onPress,
  ...props

}){
   return(
     <TouchableOpacity style={[styles(size).radius, style
     ]}
     onPress={onPress}

      >
      {icon&& <AntDesign name={icon} size={10} color="white" />}
     {props.title&&<Text style={[styles.text, textStyle]}>{props.title} </Text>}
     
     </TouchableOpacity> 
   )
}

const styles = (size) => StyleSheet.create({
  radius:{
    display:"flex",
    borderRadius:size/2,
    width:size,
    height:size,
    alignItems:"center",
    borderColor:"#fff",
    borderWidth:2,
    justifyContent:"center",
    marginLeft:3
  },
  text:{
    color:"#fff",
    fontSize:20,
    alignItems:"center",
    justifyContent:"center",
    textAlign:"center",
  }
})