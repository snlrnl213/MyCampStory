import React, {Component} from 'react';
import Notice from './notice/Notice';

class MainBoard extends Component{
    render(){
        const {selectText} = this.props;
        const mainText = selectText

        return(
            <div>
                <script>
                    
                </script>
                {
                    mainText === '공지'
                    ? <Notice/>
                    : <div>{mainText}</div>
                }
               {/* {this.props.selectTabText} */}
            </div>
        );
    }
}

export default MainBoard;