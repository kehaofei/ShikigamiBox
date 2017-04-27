// 式神录搜索框
import React, {Component} from "react";
import {
  StyleSheet,
  View,
  TextInput
} from "react-native";

export default class ShikigamiSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChangeText = (text) => {
    setTimeout(() => {
      this.props.filterShikigamiList(text);
      this.setState({
        text
      });
    }, 50);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
                   placeholder="请输入首字母或式神名"
                   onChange={(evt) => this.setState({ text: evt.nativeEvent.text })}
                   onChangeText={this.handleChangeText}
                   onEndEditing={(evt) => this.setState({ text: evt.nativeEvent.text })}
                   value={this.state.text}
                   />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  input: {
    marginTop: 5,
    padding: 8,
    width: 320,
    height: 30,
    fontSize: 12,
    borderRadius: 15,
    borderColor: '#000',
    borderWidth: 1
  }
});
