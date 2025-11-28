import {
  ChannelAction,
  useChannelDispatch,
  useChannelValue,
} from "@/contexts/channel";
import classes from "@/styles/home-page.module.css";
import { ChevronLeft, Music } from "lucide-react";
import { useState } from "react";
import { AnimatedText, LoopingText } from ".";

type PageProps = {
  onBack: () => void;
};

const HowToPlay = ({ onBack }: PageProps) => {
  return (
    <div className={classes.content}>
      <button onClick={onBack}>
        <ChevronLeft /> back
      </button>
      <AnimatedText text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel explicabo architecto quae possimus officiis temporibus blanditiis perspiciatis fuga optio iure? A dicta earum ex ipsam minima distinctio ratione atque sit." />
    </div>
  );
};

const Credits = ({ onBack }: PageProps) => {
  return (
    <div className={classes.content}>
      <button onClick={onBack}>
        <ChevronLeft /> back
      </button>
      <AnimatedText text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus ipsum amet corporis totam! Natus sint reprehenderit minus placeat. Architecto laboriosam, provident qui alias placeat illo maiores neque blanditiis obcaecati fugiat." />
    </div>
  );
};

const HomeTitle = () => {
  return (
    <section className={classes.heading}>
      <h1>
        126<span>.</span>0 FM
      </h1>

      <LoopingText
        element={
          <span className={classes["heading-caption"]}>
            Main Menu <Music size={16} /> Playing Passion of love
          </span>
        }
      />
    </section>
  );
};

type HomeMenuProps = {
  onNavigation: (page: HomePageContent) => void;
};

const HomeMenu = ({ onNavigation }: HomeMenuProps) => {
  const dispatch = useChannelDispatch();

  const handlePlay = () => {
    dispatch({
      type: ChannelAction.SHIFT_CHANNEL,
      payload: { shiftAmount: 1 },
    });
  };

  return (
    <nav className={classes.menu}>
      <button onClick={handlePlay}>Play</button>
      <ul>
        <button onClick={() => onNavigation(HomePageContent.HowToPlay)}>
          How to Play
        </button>
        <button onClick={() => onNavigation(HomePageContent.Credits)}>
          Credit
        </button>
      </ul>
    </nav>
  );
};

enum HomePageContent {
  Menu,
  HowToPlay,
  Credits,
}

const HomePage = () => {
  const { currentChannel } = useChannelValue();
  const [page, setPage] = useState<HomePageContent>(HomePageContent.Menu);

  if (currentChannel) return null;

  const handleBack = () => setPage(HomePageContent.Menu);
  const handleNavigation = (page: HomePageContent) => setPage(page);

  return (
    <div className={classes.root}>
      <HomeTitle />
      {page === HomePageContent.Menu ? (
        <HomeMenu onNavigation={handleNavigation} />
      ) : page === HomePageContent.HowToPlay ? (
        <HowToPlay onBack={handleBack} />
      ) : (
        <Credits onBack={handleBack} />
      )}
    </div>
  );
};

export default HomePage;
