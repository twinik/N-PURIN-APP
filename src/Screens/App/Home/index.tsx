import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from '../../../theme';
const Home = () => {
  
 
  return (
    <>
     
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  upperView: {
    height: hp(20),
  },
  bottomView: {
    height: hp(60),
    marginBottom: hp(10),
    marginTop: hp(-10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomText: {
    color: theme.colors.grey,
    fontFamily: theme.fonts.Nunito_Bold,
    fontSize: theme.sizes.ten,
    marginTop: hp(5),
    textAlign: 'center',
  },
});
