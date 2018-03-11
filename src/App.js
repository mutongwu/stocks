import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import { HashRouter  as Router, Route, Link } from "react-router-dom";
import { withRouter } from 'react-router';

import Home from './home';
import Profile from './profile';
import Group from './group';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.init();
  }
  init() {
    this.items = [{
      title: '交易计划',
      icon: 'icon-money',
      key: 'trade',
      path: '/',
      component: Home
    },{
      title: '直播',
      icon: 'icon-live_icon',
      key: 'liveBroadcast',
      path: '/live',
      component: Profile
    },{
      title: '圈子',
      icon: 'icon-group',
      key: 'group',
      path: '/group',
      component: Group
    }];
    let path = /#(\/\w+)/.test(window.location.hash) && RegExp.$1;
    let match = this.items.filter( item => item.path === path);
    this.state = {
      selectedTab: match[0] && match[0].key || 'trade',
      hidden: false,
    };
  }
  componentWillMount(){
    console.log(this.context)
  }
  selectTab(item) {
    this.setState({
      selectedTab: item.key
    });
  }
  render() {
    let items = this.items;
    return (
      <Router>
        <div className="App-tabBar">
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
          >
          {items.map( item => {
            return <TabBar.Item
              icon={<Link to={item.path}><i className={`icon iconfont ${item.icon}`}/><span className="title">{item.title}</span></Link> }
              selectedIcon={<Link to={item.path}><i className={`icon selected iconfont ${item.icon}`}/><span className="title">{item.title}</span></Link>}
              key={item.key}
              selected={this.state.selectedTab === item.key}
              onPress={this.selectTab.bind(this, item)}
              >
               <Route exact path={item.path} component={item.component} />
            </TabBar.Item>
          })}
          </TabBar>
        </div>
      </Router>
    );
  }
}


export default App;