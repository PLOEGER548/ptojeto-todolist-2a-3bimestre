import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import imgLogo from './assets/images.png';
import { useState } from 'react';
import btnAdd from "./assets/plus.png";

export default function App() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const handleAdd = () => {
    //Alert.alert(tarefa);
    Alert.alert([tarefa, ...tarefas]);
    setTarefa("");
  }
  return (
    <View style={styles.container}>
      <View>
        <Image source={imgLogo} style={styles.imgLogo}/>
        <Text>TODO list</Text>
      </View>
      <View style={styles.viewInput}>
        <TextInput 
          placeholder='Entre com a tarefa'
          value='[tarefa]'
          onChangeText={SetTarefa}
        />
        <TouchableOpacity onPress={handleAdd}>
        <Image source={btnadd} style={styles.btnadd}/>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  logo: {
    width: 128,
    height: 128,
  },
  btnAdd: {
    width: 32,
    height: 32,
  },
  viewInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  }
});
