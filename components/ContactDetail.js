import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const DetailKontak = ({ route }) => {
  const { friend } = route.params;
  const handleCall = () => {
    const phoneNumber = friend.telp;
    const formattedPhoneNumber = `tel:${phoneNumber}`;
    Linking.openURL(formattedPhoneNumber);
  };

  return (
    <View style={Styles.container}>
      <Image source={friend.image} style={Styles.img} />
      <Text style={Styles.title}>{friend.nama}</Text>
      <Text style={Styles.textStd}>Nomor Telfon: {friend.telp}</Text>
      <Text style={Styles.textStd}>Alamat: {friend.alamat}</Text>
      <Text style={Styles.textStd}>Keterangan: {friend.keterangan}</Text>
      <TouchableOpacity onPress={handleCall} style={Styles.call}>
        <Ionicons name="call-outline" size={40} color="#08AE2D"></Ionicons>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  img: {
    margin: 1,
    width: 120,
    height: 120,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderColor: 'blue',
  },
  textStd: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 3,
  },
  call: {
    backgroundColor: '#fdfdfd',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
});

export default DetailKontak;
