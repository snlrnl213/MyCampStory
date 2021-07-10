import React from 'react';
import './MainTitle.css';

const MainTitle = ({search}) => {
    return(
        <main className = "camp-board-main_tab">
            <div className="title">
                중간에서<br/>만나
            </div>
            <section className = "search-wrapper">
                {search}
            </section>
        </main>
    );
};

export default MainTitle;