import React, {Component} from "react";
import {
  StyleSheet,
  View
} from "react-native";
import ShikigamiHeader from "../component/ShikigamiHeader";
import ShikigamiSearch from "../component/ShikigamiSearch";
import ShikigamiListView from "../component/ShikigamiListView";
import ShikigamiModel from "../component/ShikigamiModel";
// import ShikigamiFooter from "../component/ShikigamiFooter";

export default class ShikigamiBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResult: ""
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ShikigamiHeader/>
        <ShikigamiSearch filterShikigamiList={this.filterShikigamiList} />
        <ShikigamiListView showFengyinResult={this.showFengyinResult} filterName={this.state.filterName} />
        <ShikigamiModel clearSearchResult={this.clearSearchResult} content={this.state.searchResult} />
      </View>
    );
  }

  showFengyinResult = (searchResult) => {
    this.setState({
      searchResult
    })
  }

  clearSearchResult = () => {
    this.setState({
      searchResult: ""
    })
  }

  filterShikigamiList = (filterName) => {
    this.setState({
      filterName
    });
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    marginTop: 25
  }
});
