import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import { Feather } from "@expo/vector-icons";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;

export default function Balance() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.currentSymbol}>R$</Text>
          <Text style={styles.balance}>15.000,00</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>gastos</Text>
        <View style={styles.content}> 
          <Text style={styles.currentSymbol}>R$</Text>
          <Text style={styles.expenses}>467,00</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    paddingTop: 22,
    paddingBottom: 22,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 5,
    zIndex: 99
  },
  itemTitle:{
    fontSize:20,
    color: '#DADADA'
  },
  content:{
    flexDirection: "row",
    alignItems: 'center'
  },
  balance:{
    fontSize: 22,
    color: '#2ecc71'
  },
  expenses:{
    fontSize: 22,
    color: '#e74c3c'
  }
});
