import {Button, StyleSheet, Text, View} from 'react-native';
import * as Contacts from 'expo-contacts';
import {useState} from "react";

export default function App() {
  const [hasPermission, setHasPermission] = useState(false);

  const onPress = async () => {
    const result = await Contacts.presentContactPickerAsync();
    console.log(JSON.stringify(result, null, 2));
  }

  return (
    <View style={styles.container}>
      <Button title="Request permission" onPress={() => {
        Contacts.requestPermissionsAsync().then((res) => {
          setHasPermission(res.granted);
        });
      }} />
      {hasPermission && <Button onPress={onPress} title="Pick a contact" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
