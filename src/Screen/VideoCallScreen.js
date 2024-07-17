import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  ZegoUIKitPrebuiltCall,
  ONE_ON_ONE_VIDEO_CALL_CONFIG,
} from '@zegocloud/zego-uikit-prebuilt-call-rn';
import {appId, AppSign} from '../constant/contants';
import {useNavigation} from '@react-navigation/native';
export default function VoiceCallScreen() {
//   const {id, userName} = route.params;
//   console.log("🚀 ~ VoiceCallScreen ~ id:", id)
//   console.log('🚀 ~ VoiceCallScreen ~ name:', userName);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ZegoUIKitPrebuiltCall
        appID={appId}
        appSign={AppSign}
        userID={'22'} // userID can be something like a phone number or the user id on your own user system.
        userName='MalikCode'
        callID="33555555555555" // callID can be any unique string.
        config={{
          // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
          ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
          onCallEnd: (callID, reason, duration) => {
            navigation.navigate('HomeScreen');
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
});
