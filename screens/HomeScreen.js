import React,{ useEffect, useState } from 'react';
import {View, Text, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import ImageList from '../components/ImageList';
import SearchBox from '../components/SearchBox';

const HomeScreen = () => {

    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        
        fetch('https://pixabay.com/api/?key=17980638-ab4833f2f34b1250376127fca&q=flowers&image_type=photo')
        .then((res) => res.json())
        .then((response) => {
            setPost(response.hits)
        })
        .catch((err) => console.log(err))
    
    }, [])
  
    const searchQuery = (txt) => {

        if (!txt) {
            Alert.alert(
                "⚠️ Info",
                "Enter search name... 😡",[
                    { text: "Cancel"},
                    { text: "OK"}
                ]
            );
        }else{
            setLoading(true)
            fetch(`https://pixabay.com/api/?key=17980638-ab4833f2f34b1250376127fca&q=${txt}&image_type=photo`)
            .then((res) => res.json())
            .then((response) => {
                setPost(response.hits)
                setLoading(false)
            })
            .catch((err) => console.log(err))
        }
    }
  
    return (
        <View style={styles.container}>
            <Text style={styles.header}>PIXABAY</Text>
            <SearchBox searchQuery={searchQuery} />
            { 
                loading === true && 
                <View style={styles.loading}>
                    <Image 
                        source={require('../assets/loader.gif')}  
                        style={styles.gif}
                    />
                </View>
            }
            {
                loading === false && 
                <ScrollView>
                    {post.map(val => {
                        return <React.Fragment key={val.id}>
                            <ImageList posts={val} />
                        </React.Fragment>
                    })}
                </ScrollView>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
    },
    header:{
        marginTop: 30,
        color: '#e07a5f',
        fontSize: 25,
        letterSpacing: 18,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: '700'
    },
    loading:{
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 40
    },
    gif: {
        width: 60,
        height: 60
    }
})

export default HomeScreen;
