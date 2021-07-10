import React, {Component} from 'react';
import MainTabItem from './MainTabItem';

class MainTabList extends Component{
    render(){
        const{tabs, onSelect} = this.props;

        const tabList = tabs.map(
            ({id, title, selected}) => (
                <MainTabItem
                    id={id}
                    title={title}
                    selected={selected}
                    onSelect={onSelect}
                    />
            )
        );

        return(
            <div>
                {tabList}
            </div>
        );
    }
}

export default MainTabList;