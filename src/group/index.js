import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Tag} from 'antd-mobile';

import './group.css';
class Group extends Component{
    render() {
        return (<div className="groupPage">
            <Link to="/liveroom"><Tag selected>前往直播室</Tag></Link>
        </div>)
    }
}
export default Group;