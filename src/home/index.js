import React, { Component } from 'react';
import { Button} from 'antd-mobile';

import './home.css';
import people from '../asserts/people.jpg';

class Home extends Component{
    render() {
        return (<div className="homePage">
            <div className="hd">
                <div className="imgBox">
                    <img src={people} className="header"/>
                </div>
                <div className="info">
                    <p className="name">分析师：戴育成</p>
                    <p className="skills">交易品种：白银现货排期</p>
                </div>
            </div>
            <div className="bd">
                <div className="statBox">
                    <div className="statLeft">
                        <span className="buy">买</span>
                        <p className="num">4567</p>
                        <p className="txt">市价建仓</p>
                        <p className="dt">3月6日 13：08</p>
                    </div>
                    <div className="statRight">
                        <p className="txt">止盈：4567</p>
                        <p className="txt">止损：4567</p>
                        <p className="txt">仓位：三成仓</p>
                    </div>
                </div>
                <div className="btnBox">
                    <Button type="primary" inline size="small">查看历史</Button>
                </div>
                <div className="pointOfView">
                    <strong>建仓观点：</strong>
                    <span className="txt">一段表述文字一段表述文字一段表述文字一段表述文字一段表述文字</span>
                </div>
                <div className="anoucement">
                    <h3 className="title">免责声明</h3>
                    <p className="txt">
                        分析师所发表言论或观点仅供参考，不构成买卖建议，据此入市，盈亏自负，投资有风险，入市需谨慎。
                    </p>
                </div>
            </div>
        </div>)
    }
}
export default Home;