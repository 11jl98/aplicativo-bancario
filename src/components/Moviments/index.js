import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";

export default function Moviments({ data }) {
  const [showValue, setSHowValue] = useState(false);

  return (
    <TouchableOpacity style={styles.container} onPress={()=> setSHowValue(!showValue)}>
      <Text style={styles.date}>{data.date}</Text>
      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>
        {showValue ? (
                   <Text style={data.type === 1 ? styles.value : styles.expenses}>
                   {data.type === 1 ? `R$ ${data.value}` : `R$ - ${data.value}`}
                 </Text> 
        ): (
            <View cli style={styles.skeleton}></View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: "#DADADA",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
    marginBottom: 8,
  },
  date: {
    color: "#DADADA",
    fontWeight: "bold",
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    color: "#2ecc71",
    fontWeight: "bold",
    paddingEnd: 14,
  },
  expenses: {
    fontSize: 16,
    color: "#e74c3c",
    fontWeight: "bold",
    paddingEnd: 14,
  },
  skeleton:{
      marginTop: 6,
      width:80,
      height: 10,
      backgroundColor: '#DADADA',
      borderRadius: 8,
      marginEnd: 14
  }
});
