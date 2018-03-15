import React, { Component } from 'react';
import { Button} from 'antd-mobile';
import './liveroom.css';
import people from '../asserts/people.jpg';

class LiveRoom extends Component{
    constructor(props){
        super(props);
        this.data = [{
            dt: '2018-03-06 11:22',
            text: '开年以来，50万战队首席申玲芝老师提示的个股仅3只，但涨幅却很惊人！ 截至目前，“南京银行”涨幅15.12%！“方大特钢”涨幅23.45%！'
        },{
            dt: '2018-03-06 11:22',
            text: '开年以来，50万战队首席申玲芝老师提示的个股仅3只，但涨幅却很惊人！ 截至目前，“南京银行”涨幅15.12%！“方大特钢”涨幅23.45%！'
        },{
            dt: '2018-03-06 11:22',
            text: '开年以来，50万战队首席申玲芝老师提示的个股仅3只，但涨幅却很惊人！ 截至目前，“南京银行”涨幅15.12%！“方大特钢”涨幅23.45%！'
        }];
        this.state = {
            popFlag: false
        };
    }
    showPop(){
        this.setState({
            popFlag: true
        });
    }
    hidePop(){
        this.setState({
            popFlag: false
        });
    }
    renderPop(){
        return (<div className="popBox">
                <div className="innerBox">
                    <textarea className="question" placeholder="编辑内容："></textarea>
                    <div className="btnBox tr">
                        <Button type="primary" inline size="small" onClick={this.hidePop.bind(this)}>点击发送</Button>
                    </div>
                </div>
            </div>);
    }
    renderItem(item,key){
        return (<div className="listItem" key={key}>
                    <div className="itemBox">

                    <p className="text">{item.text}</p>
                    <div className="bBar clearfix">
                        <span className="dt fl">{item.dt}</span>
                        <div className="actionBox fr">
                            <div className="action">
                                <i className="iconfont icon-praise-o"></i>
                                <span className="iconTxt">点赞</span>
                            </div>
                            <div className="action">
                                <i className="iconfont icon-star-o"></i>
                                <span className="iconTxt">收藏</span>
                            </div>
                            <div className="action" onClick={this.showPop.bind(this)}>
                                <i className="iconfont icon-question"></i>
                                <span className="iconTxt">提问</span>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>);
    }
    render() {
        return (<div className="liveRoomPage">
            <h1>《步步为银》直播室</h1>
            <div className="hd clearfix">
                <div className="imgBox">
                    <img src={people} className="header" alt=""/>
                    <p className="name tc">戴育成</p>
                </div>
                <div className="viewText">
                    <span className="title">今日视点</span>
                    <p className="text">
                        开年以来，50万战队首席申玲芝老师提示的个股仅3只，但涨幅却很惊人！<br/>
                        截至目前，“南京银行”涨幅15.12%！“方大特钢”涨幅23.45%！
                    </p>
                    <div className="bBar clearfix">
                        <span className="dt fl">2018-03-06 11:22</span>
                        <div className="actionBox fr">
                            <div className="action">
                                <i className="iconfont icon-praise-o"></i>
                                <span className="iconTxt">点赞</span>
                            </div>
                            <div className="action">
                                <i className="iconfont icon-star-o"></i>
                                <span className="iconTxt">收藏</span>
                            </div>
                            <div className="action" onClick={this.showPop.bind(this)}>
                                <i className="iconfont icon-question"></i>
                                <span className="iconTxt">提问</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bd">
                <div className="listBox">
                    {this.data.map((item, i) => this.renderItem(item, i))}
                </div>
            </div>
            <div className="ft">
                <div className="ftBar">
                    <span className="barItem">只看TA</span>
                    <span className="barItem">跳转至</span>
                    <span className="barItem">服务表</span>
                </div>
            </div>
            {
                this.state.popFlag ? this.renderPop():null
            }
        </div>)
    }
}
export default LiveRoom;