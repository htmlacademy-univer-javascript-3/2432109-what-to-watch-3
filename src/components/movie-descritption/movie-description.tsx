import Tabs from '../movie-page-components/tabs/tabs.tsx';
import {useState} from 'react';
import {MovieTabs} from '../movie-page-components/tab/movie-tabs.ts';
import Overview from '../movie-page-components/overview/overview.tsx';
import Details from '../movie-page-components/details/details.tsx';
import Reviews from '../movie-page-components/reviews/reviews.tsx';

function MovieDescription() {

  const [currentTab, setCurrentTab] = useState(MovieTabs.Overview);

  const changeTab = (tab: MovieTabs) => {
    setCurrentTab(tab);
  };

  return (
    <div className="film-card__desc">
      <Tabs currentTab={currentTab} changeTab={changeTab}/>
      {currentTab === MovieTabs.Overview && <Overview/>}
      {currentTab === MovieTabs.Details && <Details/>}
      {currentTab === MovieTabs.Reviews && <Reviews/>}
    </div>
  );
}

export default MovieDescription;
