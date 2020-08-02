import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
} from 'react-native';

const TabBar = props => {
  console.log(props);
  const {
    navigation: {
      state: {index, routes},
    },
    getLabelText,
    style,
    activeTintColor,
    inactiveTintColor,
    renderIcon,
    jumpTo,
    showLabel,
    backgroundFeaturedIcon,
    tabFeatured,
    activeFeaturedTintColor,
    inactiveFeatureTintColor,
    navigation,
  } = props;

  const navigateRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <SafeAreaView
      style={{
        flexDirection: 'row',
        height: 50,
        width: '100%',
        ...style,
      }}>
      {routes.map((route, idx) => (
        <SafeAreaView
          key={route.key}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableWithoutFeedback
            onPress={() => {
              if (route.key === 'MedicineInfo') navigateRegister();
              else jumpTo(route.key);
            }}>
            <View style={styles.iconContainer}>
              <View
                style={
                  route.key == tabFeatured
                    ? [
                        {backgroundColor: backgroundFeaturedIcon},
                        styles.customIcon,
                      ]
                    : styles.defaultIcon
                }>
                {renderIcon({
                  route,
                  focused: index === idx,
                  tintColor:
                    index === idx
                      ? route.key !== tabFeatured
                        ? activeTintColor
                        : activeFeaturedTintColor
                      : route.key !== tabFeatured
                      ? inactiveTintColor
                      : inactiveFeatureTintColor,
                })}
              </View>
              {}

              {/*showLabel ? <Text style={[styles.iconLabel, {color: index === idx ? activeTintColor : inactiveTintColor}]}>
                                {route.key !== tabFeatured ? getLabelText({
                                    route,
                                }) : null}
                            </Text> : null*/}
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      ))}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  customIcon: {
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    transform: [{translateY: -20}],
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconLabel: {
    fontSize: 9,
    fontWeight: '600',
  },
});

export default TabBar;
