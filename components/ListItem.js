import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Image, Text, TouchableOpacity, View, StyleSheet, Button, Platform, SafeAreaView, StatusBar, ImageBackground} from 'react-native';

const image = { uri: "http://placekitten.com/160/161" };

const Header = ({}) => {
    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.image_bg}>
            <Text style={styles.text}>Inside</Text>
        </ImageBackground>
    );
};

const ListItem = ({singleMedia}) => {
    console.log(singleMedia);
    return (
    
    <TouchableOpacity style={styles.row}>
        <View style={styles.imagebox}>
        <Image
            style={styles.image}
            source={{uri: singleMedia.thumbnails.w160}}
        />
        </View>
        <View style={styles.textbox}>
        <Text style={styles.listTitle}>{singleMedia.title}</Text>
        <Text>{singleMedia.description}</Text>
        </View>
    </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    row: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#252834',
    borderRadius: 6,
    flex: 1,
    },
    imagebox: {
    flex: 1,
    },
    image: {
    flex: 1,
    borderRadius: 6,
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 10,
    height: 70,
    width: 150,
    borderBottomLeftRadius: '50%',
    },
    textbox: {
    flex: 2,
    padding: 10,
    },
    listTitle: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18,
    paddingBottom: 15,
    },
    image_bg: {
        height: '100%',
    }
});

ListItem.propTypes = {
    singleMedia: PropTypes.object.isRequired,
};

export default ListItem;