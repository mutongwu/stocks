import React, { Component } from 'react';
import { List } from 'antd-mobile';

import './profile.css';
import people from '../asserts/people.jpg';

class Profile extends Component{
    constructor(props){
        super(props);
        this.items = [{
            key: 'level',
            title: '等级',
            icon: 'icon-crown'
        },{
            key: 'question',
            title: '提问',
            icon: 'icon-question'
        },{
            key: 'fav',
            title: '收藏',
            icon: 'icon-star-o'
        },{
            key: 'focus',
            title: '关注',
            icon: 'icon-heart-o'
        }];
    }
    itemClick(item){

    }
    createIcon (item){
        return (<i className={`icon iconfont ${item.icon}`}></i>);
    }
    render() {
        return (<div className="profilePage">
            <div className="hd">
                <div className="imgBox">
                    <img src={people} className="header"/>
                </div>
                <div className="info">
                    <p className="name">客户</p>
                    <p className="skills">VIP00023</p>
                </div>
            </div>
            <div className="bd">
                <div className="listBox">
                    <List renderHeader={() => ' '}>
                        {
                            this.items.map( item => <List.Item
                                        thumb={this.createIcon(item)}
                                        arrow="horizontal"
                                        onClick={this.itemClick.bind(this,item)}
                                        key={item.key}
                                        >{item.title}
                                    </List.Item>
                                    )
                        }
                    </List>
                </div>
            </div>
        </div>);
    }
}
export default Profile;