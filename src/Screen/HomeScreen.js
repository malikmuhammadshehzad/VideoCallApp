import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const [name, setName] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.mainView}>
      <Text style={styles.userNameStyle}>UserName</Text>
      <TextInput
        style={styles.TextInputStyle}
        value={name}
        onChangeText={val => {
          setName(val);
        }}
      />
      <Button
        onPress={() => {
          navigation.navigate('videoCallScreen');
        }}
        title="Join Call"
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  userNameStyle: {
    fontSize: 33,
    fontWeight: '600',
    color: 'black',
  },
  TextInputStyle: {
    backgroundColor: '#EAEBED',
    width: '85%',
    borderRadius: 12,
    fontSize: 22,
    paddingLeft: 12,
    marginVertical: 22,
  },
});
