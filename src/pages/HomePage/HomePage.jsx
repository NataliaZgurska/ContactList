import { Helmet } from 'react-helmet-async';
import css from './HomePage.module.css';
import { useEffect, useState } from 'react';
import { getImages } from '../../services/api';
import ImageGallery from '../../components/ImageGallery/ImageGallery';

const HomePage = () => {
  const [images, setImages] = useState(null);

  const fetchImages = async () => {
    try {
      const data = await getImages();
      setImages(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <Helmet>
        <title>HomePage</title>
      </Helmet>
      <div className={css.homePageContainer}>
        <h1 className={css.homePageTitle}>
          Welcome! Save and manage your contacts
        </h1>

        <ImageGallery images={images} />

        <footer className={css.footerText}>Stay in touch!</footer>
      </div>
    </>
  );
};

export default HomePage;
