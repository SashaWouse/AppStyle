import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Image, Text, TouchableOpacity, View, StyleSheet, Button, Platform, SafeAreaView, StatusBar} from 'react-native';

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
    justifyContent: 'space-between',
    alignContent: 'space-between',
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
    marginRight: 10,
    height: 70,
    width: 150,
    borderBottomLeftRadius: 50,
    },
    textbox: {
    flex: 2,
    padding: 10,
    marginLeft: 10,
    width: '40%',
    },
    listTitle: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18,
    paddingBottom: 15,
    },
});

ListItem.propTypes = {
    singleMedia: PropTypes.object.isRequired,
};

export default ListItem;