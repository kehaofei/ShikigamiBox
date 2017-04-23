import React, { Component, Dimensions } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  Image,
  Modal,
  View,
  ListView
} from 'react-native';
import ShikigamiList, {COMMON, SORTBYINITIAL} from "../model/ShikigamiList";
import ShikigamiData, {findShikigami} from "../constant/db.js";

const ShikigamiListViewData = new ShikigamiList(ShikigamiData);

export default class ShikigamiListView extends Component {

  constructor(props) {
    super();
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged:(s1, s2) => s1 !== s2
    });
    this.state = {
      dataSource: this.ds.cloneWithRowsAndSections(ShikigamiListViewData.get(SORTBYINITIAL))
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.filterName != this.props.filterName) {
      this.setState({
        dataSource: this.ds.cloneWithRowsAndSections(ShikigamiListViewData.filter(nextProps.filterName))
      });
    }
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderSectionHeader={this._renderSectionHeader}
        renderRow={this._renderRow}
        >
      </ListView>

    );
  }

  _renderSectionHeader = (sectionData, sectionId) => {
    return (
      <View style={styles.section}>
        <Text style={styles.initial}>{sectionId}</Text>
      </View>
    );
  }

  _renderRow = (rowData, sectionId, rowId) => {
    let shikigami = rowData;
    return (
      <View key={'row_' + shikigami.name} style={styles.row}>
        <Image style={styles.shikigamiIcon} source={shikigami.icon}/>
        <Text style={styles.shikigamiName}>{shikigami.name}</Text>
        <Text style={styles["shikigamiLevel" + shikigami.level]}>{shikigami.level}</Text>
        <View style={styles.buttonWrapper}>
          <TouchableHighlight
            style={styles.fengyin}
            onPress={() => {this.props.showFengyinResult(findShikigami(shikigami.name))}}
            underlayColor="rgba(248, 248, 240, 0.4)"
            >
            <Text style={styles.fengyintext}>封</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden'
  },
  section: {
    flex: 1,
    height: 25,
    backgroundColor: '#9B4C3E',
    alignItems: 'center',
    flexDirection: 'row'
  },
  initial: {
    color: '#FFF',
    marginLeft: 5
  },
  row: {
    flex: 1,
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#F8F8F4'
  },
  shikigamiIcon: {
    width: 50,
    height: 50,
    marginLeft: 5
  },
  shikigamiName: {
    marginLeft: 10,
    color: '#010101'
  },
  shikigamiLevelN: {
    marginLeft: 8,
    color: 'gray'
  },
  shikigamiLevelR: {
    marginLeft: 8,
    color: '#3C75E2'
  },
  shikigamiLevelSR: {
    marginLeft: 8,
    color: '#9955EB'
  },
  shikigamiLevelSSR: {
    marginLeft: 8,
    color: '#E3B657'
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  fengyin: {
    padding: 8,
    marginRight: 10,
    backgroundColor: '#F8F8F4',
    borderColor: '#9B4C3E',
    borderWidth: 1,
    borderRadius: 30
  },
  fengyintext: {
    color: '#9B4C3E'
  }
});
