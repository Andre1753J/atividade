import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import React from "react";

type Props = {
    produto: string | undefined
}

export function Tabela({produto}:Props) {
    return(
        <View style={styles.div}>
            <Text>{produto}</Text>
        </View>
    )
}