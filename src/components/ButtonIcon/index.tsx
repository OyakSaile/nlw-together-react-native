import React, { Children } from 'react'
import {styles} from './styles'
import { Text, Image, View,TouchableOpacity, TouchableOpacityProps} from 'react-native'
import DiscordImg from '../../assets/discord.png'

type IButton = TouchableOpacityProps & {
  title: string,
  
  
}

export function ButtonIcon({title, ...rest} :IButton) {
  return(
    <TouchableOpacity 
    style={styles.container}  
    {...rest}
    
    >
        <View style={styles.iconWrapper}
       
        >
          <Image source={DiscordImg} style={styles.icon}></Image>
        </View>

        <Text style={styles.title}>
         {title}
        </Text>
    </TouchableOpacity>
  )
}