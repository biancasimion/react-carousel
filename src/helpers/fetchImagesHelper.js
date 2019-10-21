import config from '../config/index';

const loadImages = async () => {
  const { pixabay } = config;

  const url = `${pixabay.url}?key=${pixabay.key}q=yellow+flowers&image_type=photo`;

  const response = await fetch(url);
  
  return response.json(); 
};

export default {
  loadImages
};
