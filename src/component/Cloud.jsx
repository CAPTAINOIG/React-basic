import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { XCircle } from 'react-feather';

const Cloud = () => {
  const presetKey = import.meta.env.VITE_APP_IMAGE_UPLOAD_PRESET;
  const cloudName = import.meta.env.VITE_APP_CLOUD_NAME;

  const [imageUrls, setImageUrls] = useState([]);
  const [progressBars, setProgressBars] = useState([]);

  useEffect(() => {
    const initialImageUrls = JSON.parse(localStorage.getItem('uploader')) || [];
    setImageUrls(initialImageUrls);
  }, []);

  const removeImage = (index) => {
    const updatedUrls = imageUrls.filter((_, i) => i !== index);
    setImageUrls(updatedUrls);
    localStorage.setItem('uploader', JSON.stringify(updatedUrls));
  };

  const handleInput = (event) => {
    let urls = [...imageUrls];
    let bars = [...progressBars];

    for (let i = 0; i < event.target.files.length; i++) {
      const file = event.target.files[i];
      const imageData = new FormData();
      imageData.append('file', file);
      imageData.append('upload_preset', presetKey);

      axios
        .post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, imageData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          onUploadProgress: (event) => {
            const progress = Math.round((100 * event.loaded) / event.total);
            bars[i] = progress;
            setProgressBars([...bars]);
          },
        })
        .then((res) => {
          urls.push(res.data.secure_url);
          setImageUrls([...urls]);
          localStorage.setItem('uploader', JSON.stringify(urls));
          bars[i] = 0;
          setProgressBars([...bars]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="d-flex justify-content-center  bg-dark vh-100">
      <div className="lg-w-25 bg-white mt-5 p-5 mb-5">
        <input className="cursor-pointer" type="file" multiple accept="*" name="image" onChange={handleInput} /> <br />
        {progressBars.map((progress, index) => (
          <div key={index} className="progress mb-2">
            <div className="progress-bar" role="progressbar" style={{ width: `${progress}%` }}>
              {progress}%
            </div>
          </div>
        ))}
        {imageUrls.map((url, index) => (
          <div key={index} style={{ position: 'relative' }}>
            <img src={url} className="w-100 h-100 mb-2" alt="" />
            <XCircle
              onClick={() => removeImage(index)}
              color="red"
              style={{ position: 'absolute', top: -3, right: -10, zIndex: 10, cursor: 'pointer' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cloud;
