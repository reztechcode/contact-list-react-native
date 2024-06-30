import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const friendsData = [
  {
    id: 1,
    nama: 'Irez',
    telp: '08123456',
    alamat: 'Sukabumi',
    keterangan: '-',
    image: require('../assets/avt1.png'),
  },
  {
    id: 2,
    nama: 'Nad',
    telp: '08123456',
    alamat: 'Cisaat',
    keterangan: '-',
    image: require('../assets/avt2.png'),
  },
  {
    id: 3,
    nama: 'Samsul',
    telp: '08123456',
    alamat: 'Sukabumi',
    keterangan: '-',
    image: require('../assets/avt1.png'),
  },
  {
    id: 4,
    nama: 'Farhan',
    telp: '08123456',
    alamat: 'Sukabumi',
    keterangan: '-',
    image: require('../assets/avt1.png'),
  },
];

const ListKontak = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('DetailKontak', { friend: item })}>
      <Image source={item.image} style={styles.img} />
      <View style={styles.teks}>
        <Text style={styles.title}>{item.nama}</Text>
        <Text style={styles.telp}>{item.telp}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={friendsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'blue',
    paddingBottom: 2,
  },
  img: {
    margin: 15,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  teks: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  telp: {
    fontSize: 14,
    color: '#3498db',
  },
});

export default ListKontak;
