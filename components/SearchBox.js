import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const SearchBox = ({ searchQuery }) => {

    const [text, setText] = useState('')

    const onChange = val => setText(val);

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Search photos...'
                style={styles.input}
                onChangeText={onChange}
                value={text}
                placeholderTextColor="black"
            />
            <TouchableOpacity 
                style={styles.btn}
                onPress={() => {
                    searchQuery(text);
                    setText('');
                }}
            >
                <Text style={styles.btnText}>Search</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container:{
        marginTop: 30,
        marginBottom: 20,
        marginLeft: 15,
        marginRight: 15,
    },
    input: {
        padding: 10,
        margin: 5,
        borderWidth: 2,
        borderColor: "#e5e5e5",
        borderRadius: 5,
        color: 'black',
        fontSize: 17,
    },
    btn: {
        backgroundColor: '#3d405b',
        margin: 5,
        padding: 15,
        borderRadius: 10
        
    },
    btnText: {
        color: '#fff',
        fontSize: 17,
        textAlign: 'center',
        textTransform: 'uppercase'

    },

})

export default SearchBox;