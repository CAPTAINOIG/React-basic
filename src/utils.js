

import axios from 'axios'










  const IMAGE_UPLOAD_PRESET = import.meta.env.VITE_APP_IMAGE_UPLOAD_PRESET ;
  const CLOUDINARY_API_URL = import.meta.env.VITE_APP_CLOUDINARY_API_URL;
  

  
  /**
   * * Upload image to cloudinary storage
   * @param {string} image_base64
   * @returns {string} uploaded image remote url
   * @returns {string} uploaded image remote file type
   */
  
//   export interface CloudReturn {
//     type : string,
//     file : string
//   }
  
  
  const uploadImage = async (image_base64) => {
    try {
      const payload = {
        file: `${image_base64}`,
        upload_preset: IMAGE_UPLOAD_PRESET,
      };
  
      const response = await axios.post(CLOUDINARY_API_URL, payload);
      console.log(response?.data)
      const json = {
        type : response?.data?.resource_type,
        file : response?.data?.secure_url,
      }
      return json;
    } catch (error) {
      return error;
    }
  };
  
  export {uploadImage};
  
  