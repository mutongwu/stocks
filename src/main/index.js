import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import { Route, Link } from "react-router-dom";

import Home from '../home';
import Profile from '../profile';
import Group from '../group';
import './main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
      icon: 'icon-live-broadcast',
      key: 'liveBroadcast',
      path: '/live',
      component: Group
    },{
      title: '圈子',
      icon: 'icon-group',
      key: 'group',
      path: '/group',
      component: Profile
    }];
    let path = /#(\/\w+)/.test(window.location.hash) && RegExp.$1;
    let match = this.items.filter( item => item.path === path);
    this.setState({
      selectedTab: (match[0] && match[0].key) || 'trade',
      hidden: false,
    });
  }
  componentWillMount(){
    this.init();
  }
  selectTab(item) {
    this.setState({
      selectedTab: item.key
    });
  }
  render() {
    let items = this.items;
    return (
        <div className="Main-tabBar">
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
          >
          {items.map( item => {
            return (<TabBar.Item
              icon={<Link to={item.path}><i className={`icon iconfont ${item.icon}`}/><span className="title">{item.title}</span></Link> }
              selectedIcon={<Link to={item.path}><i className={`icon selected iconfont ${item.icon}`}/><span className="title">{item.title}</span></Link>}
              key={item.key}
              selected={this.state.selectedTab === item.key}
              onPress={this.selectTab.bind(this, item)}
              >
              
                <Route exact path={`${item.path}`} component={item.component} />
            </TabBar.Item>)
          })}
          </TabBar>
        </div>
    );
  }
}


export default Main;