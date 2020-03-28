import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, ButtonGroup, Layout, Text} from '@ui-kitten/components';

export const ButtonGroupColor = () => {
  const [text, setText] = React.useState('Press any button');

  const onLeftPress = () => {};

  const onMiddlePress = () => {};

  const onRightPress = () => {};

  return (
    <Layout style={styles.container}>
      <ButtonGroup>
        <Button onPress={onLeftPress}></Button>
        <Button onPress={onMiddlePress}></Button>
        <Button onPress={onRightPress}></Button>
      </ButtonGroup>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginHorizontal: 8,
  },
});
