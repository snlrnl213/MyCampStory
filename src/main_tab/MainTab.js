import React, {Component} from 'react';
import MainTitle  from "./MainTitle";
import Search from './Search';
import MainTabList from './MainTabList';

class MainTab extends Component{

    test(){
        console.log('aaaaaaaaaaaaaa');
    }

    state = {
        input: '',
        tabs: [
            { id: 0, title: '공지', selected: true},
            { id: 1, title: '게시판', selected: false},
            { id: 2, title: '건의', selected: false}
        ]
    }

    handleSelect = (id) => {
                
        const {tabs} = this.state;
    
        //파라미터로 받은 id를 가지고 몇번째 아이템인지 찾습니다.
        const index = tabs.findIndex(tab => tab.id === id);
        const selected = tabs[index];// 선택한 객체
    
        const nextTabs =tabs.map(e =>{
            e.selected = false;
            return e;
        });//배열을 복사
    
        // 기존의 값들을 복사하고, checked 값을 덮어쓰기

        
        nextTabs[index] = {
          ...selected,
          selected: true
        };
        
        this.props.selectTab(tabs[index].title);

        this.setState({
          tabs: nextTabs
        });
      }

    


    render(){
        const {input, tabs} = this.state;
        const {
            handleSelect
        }=this;
        
        return(
            <div>
               <MainTitle search={
                    <Search
                    value={NaN}
                    onKeyPress={this.test}
                    onChange={NaN}
                    onCreate={this.test}
                    />
                }>
                </MainTitle>
                <MainTabList tabs={tabs} onSelect={handleSelect}/>
            </div>
        );
    }
}

export default MainTab;