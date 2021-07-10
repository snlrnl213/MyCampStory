import React,{Component} from 'react';
import './MainTabItem.css';

class MainTabItem extends Component{
    render(){
        const{ title, id, selected, onSelect} = this.props;

        return(
            <div className={`tab-item ${selected && 'tab-selected'}`} onClick={() => onSelect(id)}>
                <div className={`tab-front ${selected && 'front-selected'}`}></div>
               <div className={`tab-text ${selected && 'selected'}`}>
                   <div>{title}</div>
               </div>
            </div>
        );
    }
}

export default MainTabItem;