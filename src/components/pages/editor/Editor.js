import React, { Component, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReacthtmlParser from 'react-html-parser'
import { useDispatch, useSelector } from 'react-redux';
import { createBlogPost } from '../../../redux/admin/actions/api';

const Editor = () => {
    const [] = useState([]);
    const dispatch = useDispatch();
    const createBlogDetails = useSelector(state => state.createBlogPostReducer);
    let blogContent = null;


    console.log('from view ',createBlogDetails.blogPost);
    return (
        <div className="mx-8 mt-8">
            <h2>Using CKEditor 5 build in React</h2>
            <CKEditor
                editor={ClassicEditor}
                data=""
                onReady={editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                    blogContent = data;
                }}
                onBlur={(event, editor) => {
                    console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                }}
            />
            <>
            <button onClick={() => dispatch(createBlogPost(blogContent))} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Save
                            </button>
                <p>this is result</p>
                {ReacthtmlParser(createBlogDetails.blogPost)}
            </>
        </div>
    );
}

export default Editor;
