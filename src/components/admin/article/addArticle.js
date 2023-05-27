import React, { useState,useContext } from 'react';
// import axios from 'axios';
import { ArticleContext } from './index';
import "./style.css"

function AddArticleForm({ onSubmit }) {
  const { addArticle } = useContext(ArticleContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newArticle = {
      title,
      content,
    };

    try {
      const response = await fetch('/article/create-article', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newArticle),
      });

      if (response.ok) {
        const article = await response.json();
        addArticle(article);
        setTitle('');
        setContent('');
        console.log('Bài viết đã được thêm thành công');
      } else {
        console.error('Lỗi khi tạo bài viết');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-article-form">
      <div className="form-group">
        <label htmlFor="title" className="form-label">
          Tiêu đề
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="content" className="form-label">
          Nội dung
        </label>
        <textarea
          className="form-control"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Thêm bài viết
      </button>
    </form>
  );
}

export default AddArticleForm;