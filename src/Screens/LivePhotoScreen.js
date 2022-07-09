/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {colors, images} from '../utils';

export default function LivePhotoScreen() {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Live Photo</Text>
      <View style={styles.box}>
        <View style={styles.iconRounded}>
          <Icon color={colors.white} name="user" size={140} />
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.commentSection}>
          <Image source={images.commentInfoIcon} style={styles.commentIcon} />
          <Text style={styles.comment}>
            Please ensure your face is completely visible on screen for your KYC
            to be sucessfully processed.
          </Text>
        </View>
        <TouchableOpacity style={styles.button} activeOpacity={0.5}>
          <>
            <EvilIcons name="image" size={25} color={colors.white} />
            <Text style={styles.buttonTitle}>Take Photo</Text>
          </>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: 5,
    padding: 16,
  },
  title: {
    marginTop: 40,
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.green,
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: colors.lightGrey,
    height: 235,
    borderRadius: 5,
  },
  section: {
    justifyContent: 'space-between',
    flex: 1,
  },
  iconRounded: {
    backgroundColor: '#cecece',
    height: 180,
    width: 180,
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  commentSection: {
    marginTop: 19,
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentIcon: {
    marginRight: 12,
  },
  comment: {
    fontSize: 14,
    color: colors.secondary,
  },
  button: {
    backgroundColor: colors.lightGreen,
    padding: 15,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonTitle: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 9,
  },
});
