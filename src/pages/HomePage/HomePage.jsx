import { Helmet } from 'react-helmet-async';
import css from './HomePage.module.css';
import firstPicture from './tulips-min.jpg';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
      </Helmet>
      <div className={css.homePageContainer}>
        <h1 className={css.homePageTitle}>Будь на зв'язку</h1>
        <ul className={css.homePagePicturesList}>
          <li className={css.homePagePiccturesItem}>
            <div className={css.HomePageImgWrap}>
              <img
                src={firstPicture}
                alt="tulips"
                className={css.homePageImg}
              />
            </div>
          </li>
          <li className={css.homePagePiccturesItem}>
            <div className={css.HomePageImgWrap}>
              <img
                src={firstPicture}
                alt="tulips"
                className={css.homePageImg}
              />
            </div>
          </li>
          <li className={css.homePagePiccturesItem}>
            <div className={css.HomePageImgWrap}>
              <img
                src={firstPicture}
                alt="tulips"
                className={css.homePageImg}
              />
            </div>
          </li>
          <li className={css.homePagePiccturesItem}>
            <div className={css.HomePageImgWrap}>
              <img
                src={firstPicture}
                alt="tulips"
                className={css.homePageImg}
              />
            </div>
          </li>
        </ul>
        <p className={css.welcomeText}>
          Welcome! Save and manage your contacts
        </p>
        <footer className={css.footerText}>
          "Ну що б, здавалося, слова... Слова та голос - більш нічого. А серце
          б'ється - ожива, як їх почує" Т.Шевченко
        </footer>
      </div>
    </>
  );
};

export default HomePage;
