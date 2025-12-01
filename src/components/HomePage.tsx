import {
  ChannelAction,
  useChannelDispatch,
  useChannelValue,
} from "@/contexts/channel";
import sounds from "@/sounds";
import classes from "@/styles/home-page.module.css";
import { ChevronLeft, Music } from "lucide-react";
import { useEffect, useState } from "react";
import { LoopingText } from ".";

type PageProps = {
  onBack: () => void;
};

const HowToPlay = ({ onBack }: PageProps) => {
  return (
    <div className={classes.content}>
      <button onClick={onBack}>
        <ChevronLeft />
        <h2>How to play</h2>
      </button>

      <p>
        Move through the first four radio stations and read the text each one
        displays. Each station contains a clue or information you can deduce
        from what’s written. Combine what you find to figure out a single word.
        Go to the fifth station, enter that word into the password field, and
        unlock it.
      </p>
    </div>
  );
};

const Credits = ({ onBack }: PageProps) => {
  return (
    <div className={classes.content}>
      <button onClick={onBack}>
        <ChevronLeft />
        <h2>Credits</h2>
      </button>

      <section className={classes.devs}>
        <div>
          <h5>Amirhossein Pourimanshad</h5>
          <p>Level Design, Programming, UX</p>
        </div>

        <div>
          <h5>Mohsen Shamsitabar</h5>
          <p>Programming, UX</p>
        </div>

        <div>
          <h5>Amir Ghaempanah</h5>
          <p>UIUX</p>
        </div>
      </section>
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
        duration="10s"
        element={
          <span className={classes["heading-caption"]}>
            Main Menu <Music size={16} /> Playing Jay Varton - My kind of
            illusion
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

  useEffect(() => {
    sounds.mainMenu.play();

    return () => {
      sounds.mainMenu.pause();
    };
  }, [currentChannel]);

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
