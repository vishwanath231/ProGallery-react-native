import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ImageList = ({ posts }) => {


  return (
    <TouchableOpacity style={[styles.listItem, styles.shadowProp]} >
        <View>
            <Image source={{uri: posts.webformatURL}} style={styles.img} />
            <View style={styles.box}>
                <View style={styles.viewBox}>
                    <Text style={styles.viewTxt}>Views : </Text>
                    <Text style={styles.viewVal}>{posts.views}</Text>
                </View>
                <View style={styles.likesBox}>
                    <Text style={styles.viewTxt}>Likes : </Text>
                    <Text style={styles.likesVal}>{posts.likes}</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
    listItem:{
        padding: 15,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#eee',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 10,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
    listItemTitle: {
        color: '#212529',
        fontSize: 16,
        fontWeight: '500'
    },
    viewVal:{
        color: '#81b29a',
        fontSize: 17,
        fontWeight: '700'
    },
    likesVal:{
        color: '#f2cc8f',
        fontSize: 17,
        fontWeight: '700'
    },
    box:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',  
        marginBottom: 10,
        marginTop: 20,
    },
    viewBox:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20

    },
    likesBox:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20
    },
    viewTxt:{
        color: 'black',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center'
    },
    listItemText:{
        color: 'black',
        fontSize: 15,
        textAlign: 'center'

    },
    remove:{
        color: 'white',
        fontFamily: 'bold',
        fontSize: 22,
        width: 30,
        height: 30,
        borderRadius: 100/2,
        textAlign: 'center',
        backgroundColor: 'red'
    },
    img:{
        width: '100%',
        height: 300
    }
})

export default ImageList;