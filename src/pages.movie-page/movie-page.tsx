import Logo from '../../components/logo/logo.tsx';
import Footer from '../../components/footer/footer.tsx';
import {Film} from '../../mocks/films.ts';
import {Link, useParams} from 'react-router-dom';
import FilmList from '../../components/film-list/film-list.tsx';
import MovieDescription from '../../components/movie-description/movie-description.tsx';

type MoviesProps = {
  films: Film[];
}
function MoviePage(props: MoviesProps) {
  const { id } = useParams();
  const movie = (props.films.find((film) => film.id === +(id ?? 1)) ?? props.films[0]);
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={movie.previewImage} alt={movie.altImage}/>
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <Logo/>
            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{movie.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">Drama</span>
                <span className="film-card__year">2014</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
@@ -72,49 +73,7 @@
              />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="#" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">8,9</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">240 ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
                  Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave`&apos;`s friend and protege.
                </p>
                <p>Gustave prides himself on providing first-className service to the hotel`&apos;`s guests, including
                  satisfying the sexual needs of the many elderly women who stay there. When one of Gustave`&apos;`s lovers
                  dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect
                  in her murder.
                </p>

                <p className="film-card__director">
                  <strong>Director: Wes Anderson</strong>
                </p>

                <p className="film-card__starring">
                  <strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other
                  </strong>
                </p>
              </div>
            </div>
            <MovieDescription/>
          </div>
        </div>
      </section>
