import React from "react";
import { View, Text, TextInput, StatusBar, Image } from "react-native";
import { styles } from "./styles";
import IllustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";

export function SignIn() {
  return (
    <View style={styles.container}>
     <StatusBar 
     barStyle="light-content"
     backgroundColor="transparent"
     translucent
     />
     
      <Image source={IllustrationImg} resizeMode={"stretch"} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {"\n"}
          suas Jogatinas {"\n"}
          Facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{"\n"}
          favoritos com seus amigos
        </Text>
        <ButtonIcon title="Entrar com Discord" activeOpacity={0.5}/>

      </View>
    </View>
  );
}
