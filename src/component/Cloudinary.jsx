import React, { useRef, useState, Fragment } from 'react';
import { Button, InputGroup, Label } from "reactstrap";
import { Camera, X, XCircle } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loading-icons';
import avatar from '../assets/image/avatar.webp';

const Cloudinary = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [medias, setMedias] = useState([]);
  const uploadMedias = useRef([]);

  const setMedia = async (e) => {
    e.preventDefault();
    if (e.target.files?.length) {
      setIsLoading(true);
      for (let i = 0; i < e.target.files.length; i++) {
        const currentFile = e.target.files[i];
        // Use URL.createObjectURL for image preview
        const imageUrl = URL.createObjectURL(currentFile);
        console.log('Current File:', currentFile);
        console.log('Image URL:', imageUrl);
        setMedias([...medias, { file: imageUrl, type: 'image' }]);
        uploadMedias.current.push({ file: imageUrl, type: 'image' });
      }
      setIsLoading(false);
    }
  };

  const removeImage = (index) => {
    const updatedMedias = medias.filter((_, i) => i !== index);
    setMedias(updatedMedias);
    uploadMedias.current = updatedMedias;
  };

  const back = () => {
    navigate(-1);
  };

  return (
    <div className="addpost">
      <Button
        type="button"
        className="btn-next btn-sm mb-1"
        color="secondary"
        onClick={back}
      >
        <X />
      </Button>
      {isLoading && <ThreeDots />}
      
      <Label className="form-label mb-0 py-1 mx-2" for="file">
        <span title="pick file">
          <Camera />
        </span>
        <div className="mb-2">
          <InputGroup>
            <input
              onChange={(e) => setMedia(e)}
              name="main"
              type="file"
              id="file"
              accept="*"
              multiple
              placeholder="file"
              className="form-control d-none"
              disabled={isLoading} // Disable input during loading
            />
          </InputGroup>
        </div>
      </Label>

      <div className="d-flex mb-3">
        {uploadMedias.current?.map((file, i) => (
          <div key={i} className="mx-2" style={{ position: 'relative' }}>
            {file.type === 'image' ? (
              <Fragment>
                <img
                  style={{
                    maxWidth: '120px',
                    position: 'relative',
                    borderRadius: '5px'
                  }}
                  className="avatar avatar-xl mr-3"
                  src={file.file}
                  alt="avatar"
                />
                <XCircle
                  onClick={() => removeImage(i)}
                  color={"red"}
                  style={{ position: 'absolute', top: -3, right: -10, zIndex: 10 }}
                />
              </Fragment>
            ) : (
              <span>Other type of file UI</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cloudinary;
