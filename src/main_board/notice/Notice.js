// import React, {Component} from 'react';
import './Notice.css';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {useState} from 'react';
// import ReactHtmlParser from '../../../node_modules/node-html-parser';

function Notice(){
    const [noticeContent, setNoticeContent] = useState({
        title:'',
        content:''
    })

    const [viewContent, setViewContent]  = useState([]);

    const getValue = e => {
        const { name, value } = e.target;
        // console.log(name,value);
        setNoticeContent({
            ...noticeContent,
            [name]: value
        })
        console.log(noticeContent);
    };

    return(
        <div className="Notice">
            <h1>공 지 사 항</h1>
            <div className='notice-container'>
                {viewContent.map(element =>
                    <div>
                        <h2>{element.title}</h2>
                        <div>
                            내용
                            {/* {ReactHtmlParser(elemet.content)} */}
                        </div>
                    </div>
                )}
            </div>
            <div className='form-wrapper'>
                <input className="title-input" 
                        type='text' 
                        placeholder='제목'
                        onChange={getValue}
                        name='title'/>
                <CKEditor
                    editor={ClassicEditor}
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={editor => {
                        //You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({event, editor, data});
                        setNoticeContent({
                            ...noticeContent,
                            content: data
                        })
                        console.log(noticeContent);
                    }}
                    onBlur={(event, editor) =>{
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor)=>{
                        console.log('Focus.', editor);
                    }}
                />
                {/* <textarea className="text-area" placeholder='내용'></textarea> */}
            </div>
            <button className="submit-button" 
            onClick={()=>{
                setViewContent(viewContent.concat({...noticeContent}));
            }
            }>입력</button>
        </div>
    )
}

export default Notice;