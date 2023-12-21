import Tab from '../tab/tab.tsx';
import {MovieTabs} from '../tab/movie-tabs.ts';

type TabsProps = {
  currentTab: MovieTabs;
  changeTab: (tab: MovieTabs) => void;
}

function Tabs({currentTab, changeTab}: TabsProps) {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <Tab tabType={MovieTabs.Overview} isActive={currentTab === MovieTabs.Overview} changeTab={changeTab}/>
        <Tab tabType={MovieTabs.Details} isActive={currentTab === MovieTabs.Details} changeTab={changeTab}/>
        <Tab tabType={MovieTabs.Reviews} isActive={currentTab === MovieTabs.Reviews} changeTab={changeTab}/>
      </ul>
    </nav>
  );
}

export default Tabs;
