import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  TextInput,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
var { width, height, scale } = Dimensions.get('window');
// 类
export default class ShikigamiModel extends Component {
  // 构造函数
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.content && nextProps.content != this.state.content) {
      this.setState({
        show: true,
        content: nextProps.content
      });
    }
  }

  // 显示/隐藏 modal
  hide() {
    this.setState({
      show: false,
      content: ""
    });

    this.props.clearSearchResult();
  }

  // 绘制View
  render() {
     return (
        <Modal
           animationType='slide'
           transparent={true}
           visible={this.state.show}
           onShow={() => {}}
           onRequestClose={() => {}} >
           <View style={styles.modalStyle}>
             <View style={styles.subView}>
               <Text style={styles.contentText}>
                 {this.props.content}
               </Text>
               <View style={styles.buttonView}>
                 <TouchableHighlight underlayColor='transparent'
                   style={styles.buttonStyle}
                   onPress={this.hide.bind(this)}>
                   <Text style={styles.buttonText}>
                     确定
                   </Text>
                 </TouchableHighlight>
               </View>
             </View>
           </View>
        </Modal>
     );
  }

}
// Modal属性
// 1.animationType bool  控制是否带有动画效果
// 2.onRequestClose  Platform.OS==='android'? PropTypes.func.isRequired : PropTypes.func
// 3.onShow function方法
// 4.transparent bool  控制是否带有透明效果
// 5.visible  bool 控制是否显示

// css样式
var styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#ECECF0',
  },
  // modal的样式
  modalStyle: {
    // backgroundColor:'#ccc',
    alignItems: 'center',
    justifyContent:'center',
    flex:1,
  },
  // modal上子View的样式
  subView:{
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#fff',
    alignSelf: 'stretch',
    justifyContent:'center',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor:'#ccc',
  },
  // 标题
  titleText:{
    marginTop:10,
    marginBottom:5,
    fontSize:16,
    fontWeight:'bold',
    textAlign:'center',
  },
  // 内容
  contentText:{
    padding:20,
    fontSize:14,
    textAlign:'left',
  },
  // 按钮
  buttonView:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonStyle:{
    flex:1,
    height:44,
    alignItems: 'center',
    justifyContent:'center',
  },
  buttonText:{
    fontSize:16,
    color:'#3393F2',
    textAlign:'center',
  },
});
