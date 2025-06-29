import React, { useState } from 'react';
import { Upload, Image, Wand2, Calendar, Share2, Save } from 'lucide-react';
import './VideoUpload.css';

const VideoUpload = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [scheduledDate, setScheduledDate] = useState('');
  const [isGeneratingCaption, setIsGeneratingCaption] = useState(false);

  const platforms = [
    { id: 'youtube', name: 'YouTube', color: '#FF0000' },
    { id: 'instagram', name: 'Instagram', color: '#E4405F' },
    { id: 'facebook', name: 'Facebook', color: '#1877F2' },
    { id: 'twitter', name: 'Twitter', color: '#1DA1F2' }
  ];

  const templates = [
    { id: 'marketing', name: 'Marketing Campaign', description: 'Perfect for product launches and promotions' },
    { id: 'tutorial', name: 'Tutorial', description: 'Educational content with step-by-step guides' },
    { id: 'behind-scenes', name: 'Behind the Scenes', description: 'Casual, authentic content' },
    { id: 'announcement', name: 'Announcement', description: 'Important updates and news' }
  ];

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoFile(file);
    }
  };

  const handleThumbnailUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(file);
    }
  };

  const handlePlatformToggle = (platformId) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId) 
        ? prev.filter(id => id !== platformId)
        : [...prev, platformId]
    );
  };

  const generateCaption = async () => {
    setIsGeneratingCaption(true);
    // Simulate API call to Gemini API
    setTimeout(() => {
      const generatedCaption = `🚀 Exciting new content alert! 

Check out this amazing ${selectedTemplate || 'video'} that we've created just for you. 

✨ Key highlights:
• Professional quality content
• Engaging storytelling
• Perfect for your audience

#SocialMedia #Content #${selectedTemplate || 'Video'} #Trending

What do you think? Let us know in the comments below! 👇`;
      
      setDescription(generatedCaption);
      setIsGeneratingCaption(false);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      videoFile,
      thumbnail,
      title,
      description,
      selectedPlatforms,
      selectedTemplate,
      scheduledDate
    });
  };

  return (
    <div className="upload-container">
      <div className="upload-header">
        <h1 className="upload-title">Upload New Video</h1>
        <p className="upload-subtitle">Share your content across multiple platforms</p>
      </div>

      <form onSubmit={handleSubmit} className="upload-form">
        <div className="upload-grid">
          {/* Video Upload Section */}
          <div className="upload-section">
            <h2 className="section-title">Video File</h2>
            <div className="upload-area">
              <input
                type="file"
                accept="video/*"
                onChange={handleVideoUpload}
                className="file-input"
                id="video-upload"
              />
              <label htmlFor="video-upload" className="upload-label">
                {videoFile ? (
                  <div className="file-info">
                    <Upload className="upload-icon" />
                    <span className="file-name">{videoFile.name}</span>
                    <span className="file-size">{(videoFile.size / 1024 / 1024).toFixed(2)} MB</span>
                  </div>
                ) : (
                  <div className="upload-placeholder">
                    <Upload className="upload-icon" />
                    <span>Click to upload video</span>
                    <span className="upload-hint">MP4, MOV, AVI up to 500MB</span>
                  </div>
                )}
              </label>
            </div>
          </div>

          {/* Thumbnail Section */}
          <div className="upload-section">
            <h2 className="section-title">Thumbnail</h2>
            <div className="thumbnail-area">
              <input
                type="file"
                accept="image/*"
                onChange={handleThumbnailUpload}
                className="file-input"
                id="thumbnail-upload"
              />
              <label htmlFor="thumbnail-upload" className="thumbnail-label">
                {thumbnail ? (
                  <div className="thumbnail-preview">
                    <img src={URL.createObjectURL(thumbnail)} alt="Thumbnail preview" />
                    <div className="thumbnail-overlay">
                      <Image className="thumbnail-icon" />
                      <span>Change Thumbnail</span>
                    </div>
                  </div>
                ) : (
                  <div className="thumbnail-placeholder">
                    <Image className="thumbnail-icon" />
                    <span>Upload Thumbnail</span>
                    <span className="upload-hint">JPG, PNG up to 5MB</span>
                  </div>
                )}
              </label>
            </div>
          </div>
        </div>

        {/* Video Details */}
        <div className="details-section">
          <div className="details-grid">
            <div className="form-group">
              <label className="form-label">Video Title</label>
              <input
                type="text"
                className="form-input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter video title"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Template</label>
              <select
                className="form-select"
                value={selectedTemplate}
                onChange={(e) => setSelectedTemplate(e.target.value)}
              >
                <option value="">Select a template</option>
                {templates.map(template => (
                  <option key={template.id} value={template.id}>
                    {template.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <div className="caption-header">
              <label className="form-label">Description / Caption</label>
              <button
                type="button"
                className="generate-btn"
                onClick={generateCaption}
                disabled={isGeneratingCaption}
              >
                <Wand2 className={`generate-icon ${isGeneratingCaption ? 'spinning' : ''}`} />
                {isGeneratingCaption ? 'Generating...' : 'Generate with AI'}
              </button>
            </div>
            <textarea
              className="form-textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter video description or use AI to generate one"
              rows={6}
            />
          </div>
        </div>

        {/* Platform Selection */}
        <div className="platforms-section">
          <h2 className="section-title">Select Platforms</h2>
          <div className="platforms-grid">
            {platforms.map(platform => (
              <div
                key={platform.id}
                className={`platform-card ${selectedPlatforms.includes(platform.id) ? 'selected' : ''}`}
                onClick={() => handlePlatformToggle(platform.id)}
              >
                <div className="platform-icon" style={{ backgroundColor: platform.color }}>
                  <Share2 />
                </div>
                <span className="platform-name">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Section */}
        <div className="schedule-section">
          <h2 className="section-title">Schedule</h2>
          <div className="schedule-options">
            <label className="schedule-option">
              <input type="radio" name="schedule" value="now" defaultChecked />
              <span>Post Now</span>
            </label>
            <label className="schedule-option">
              <input type="radio" name="schedule" value="later" />
              <span>Schedule for Later</span>
            </label>
          </div>
          <div className="form-group">
            <input
              type="datetime-local"
              className="form-input"
              value={scheduledDate}
              onChange={(e) => setScheduledDate(e.target.value)}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button type="button" className="btn btn-outline">
            <Save />
            Save as Draft
          </button>
          <button type="submit" className="btn btn-primary">
            <Share2 />
            Publish Video
          </button>
        </div>
      </form>
    </div>
  );
};

export default VideoUpload;