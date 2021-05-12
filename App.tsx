/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const countryCode = '+61';

// Removes zero and any symbols from the user input phone number
const checkPhoneNumber = (codeStr: string, phoneStr: string) => {
  const phonenumber = `${codeStr}${phoneStr
    .replace(/\D/g, '')
    .replace(/^0/, '')}`;

  return phonenumber;
};

const App = () => {
  const [userInput, setUserInput] = useState('');

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={'light-content'} />

      <View style={styles.content}>
        <View>
          <View style={styles.flexRow}>
            <View style={styles.countryCode}>
              <Text>{countryCode}</Text>
            </View>
            <TextInput
              autoFocus
              value={userInput}
              maxLength={20}
              keyboardType="phone-pad"
              onChangeText={setUserInput}
              style={styles.input}
            />
          </View>
        </View>

        <View style={{backgroundColor: 'grey', marginTop: 30}}>
          <Text
            style={{color: 'white', paddingVertical: 10, fontWeight: 'bold'}}>
            Formatted Phone: {checkPhoneNumber(countryCode, userInput)}
          </Text>
        </View>
      </View>
      <Button
        title="Login"
        onPress={() =>
          Alert.alert(
            '',
            `Formatted phone number to be sent: ${checkPhoneNumber(
              countryCode,
              userInput,
            )}`,
          )
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: Colors.darker,
  },
  content: {paddingVertical: 150, paddingHorizontal: 15},
  flexRow: {flexDirection: 'row', marginBottom: 8, height: 60},
  countryCode: {
    width: '15%',
    backgroundColor: 'white',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});

export default App;
