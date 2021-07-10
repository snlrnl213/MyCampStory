import React, {Component} from "react";
import './App.css';
import MainTab from "./main_tab/MainTab";
import MainBoard from "./main_board/MainBoard";

// import ReactHtmlParser from 'node-html-parser';

class App extends Component{
  state = {
    selectTabText: '공지'
  }

  selectTab =(text)=>{
    
    // this.selectTabText =text;
    this.setState({
      selectTabText: text
    });
    // console.log('bbbbbbbbbbbbbbbbbbbbb'+this.selectTabText);
  }
  


  render(){
    const {selectTabText} = this.state;
    return(
      <div className="main">
        <div className="tab">
          <MainTab selectTab={this.selectTab}/>
        </div>
        <div className="board">
          <MainBoard selectText={selectTabText}/>
        </div>
      </div>
    )
  }
}

export default App;
