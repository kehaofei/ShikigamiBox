// 式神录标题栏组件
import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text
} from "react-native";

export default class ShikigamiHeader extends Component{

  static defaultProps = {
    title: '式神录'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9B4C3E'
  },
  title: {
    color: '#FFF',
    fontSize: 24
  }
});
