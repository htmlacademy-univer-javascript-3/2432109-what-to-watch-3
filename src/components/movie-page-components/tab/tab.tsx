import {MovieTabs} from './movie-tabs.ts';

type TabProps = {
  tabType: MovieTabs;
  isActive: boolean;
  changeTab: (tab: MovieTabs) => void;
}

function Tab({tabType, isActive, changeTab}: TabProps) {
  return (
    <li className={`film-nav__item ${isActive ? 'film-nav__item--active' : ''}`}
      onClick={(e) => {
        e.preventDefault();
        changeTab(tabType);
      }}
    >
      <a href="#" className="film-nav__link">{tabType}</a>
    </li>
  );
}

export default Tab;
