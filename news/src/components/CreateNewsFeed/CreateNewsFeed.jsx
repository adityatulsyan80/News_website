// CreateNewsFeed.js
import React, { useState } from 'react';
import './CreateNewsFeed.css'; 


const CreateNewsFeed = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., make API request to publish the news feed
    console.log('Title:', title);
    console.log('Content:', content);
    console.log('Category:', category);
    console.log('File:', file);
  }

  const handlePreview = () => {
    // Toggle mobile preview visibility
    setPreviewVisible(!previewVisible);
  }

  return (
    <div className="create_news">
      <h1>Create News Feed</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Content:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Upload Image or Video:</label>
          <input type="file" accept="image/*, video/*" onChange={handleFileChange} />
        </div>
        <button type="submit"className="btn btn-dark">Publish</button>&nbsp;&nbsp;&nbsp;
        <button type="button" className="btn btn-dark" onClick={handlePreview}>Toggle Mobile Preview</button>
      </form>
      {previewVisible && (
        <div className="mobile-preview">
          <h2>Mobile Preview</h2>
          {/* Render a preview of how the news feed will appear on mobile */}
          <div className="preview-content">
            <h3>{title}</h3>
            <p>{content}</p>
            {file && (
              <div className="preview-file">
                {file.type.startsWith('image/') ? (
                  <img src={URL.createObjectURL(file)} alt="Preview" />
                ) : (
                  <video controls>
                    <source src={URL.createObjectURL(file)} type={file.type} />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
   
  );
}

export default CreateNewsFeed;
