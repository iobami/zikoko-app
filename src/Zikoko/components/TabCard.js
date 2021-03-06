import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FavouriteIcon from '../assets/icons/favourite.svg';
import {COLORS, PRIMARY_FONT} from '../assets/config';

const TabCard = ({article}) => (
  <View style={styles.container}>
    <Image
      style={styles.cardImage}
      source={article.cover}
      resizeMode={'contain'}
    />
    <View style={styles.cardContentWrapper}>
      <Text style={styles.category}>LOVE LIFE</Text>
      <TouchableOpacity activeOpacity={0.8}>
        <Text style={styles.cardTitle}>{article.title}</Text>
      </TouchableOpacity>
      <Text style={styles.author}>By {article.author}</Text>
    </View>
    <TouchableOpacity style={styles.favouriteButton}>
      <FavouriteIcon />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 146,
    backgroundColor: '#F9F9FF',
    borderRadius: 8,
    paddingRight: 10,
    paddingLeft: 10,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15,
  },
  cardImage: {height: 120, width: 80, borderRadius: 4},
  cardContentWrapper: {
    minHeight: 100,
    marginLeft: 16,
    justifyContent: 'space-evenly',
  },
  cardTitle: {
    marginTop: 14,
    color: COLORS.primaryText,
    fontFamily: PRIMARY_FONT.semiBold,
    fontSize: 15,
    lineHeight: 18,
  },
  category: {
    color: COLORS.primary,
    fontFamily: PRIMARY_FONT.semiBold,
    fontSize: 11,
  },
  author: {color: '#818998', marginTop: 14},
  favouriteButton: {position: 'absolute', right: 20, top: 20},
});

export default TabCard;
