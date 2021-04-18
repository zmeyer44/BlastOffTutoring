import React from 'react';

import Icon from '@pagerland/common/src/components/Icon';
import Arrow from '@pagerland/icons/src/line/ArrowUp';

import './style.css';

const ScrollUp = ({ scrollStepInPx, delayInMs }) => {
  const [thePosition, setThePosition] = React.useState(false);
  const timeoutRef = React.useRef(null);

  React.useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        setThePosition(true);
      } else {
        setThePosition(false);
      }
    });
  }, []);

  const onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(timeoutRef.current);
    }
    window.scroll(0, window.pageYOffset - scrollStepInPx);
  };

  const scrollToTop = () => {
    timeoutRef.current = setInterval(onScrollStep, delayInMs);
  };

  const renderGoTopIcon = () => {
    return (
      <div
        className={`go-top ${thePosition ? 'active' : ''}`}
        onClick={scrollToTop}
        role="button"
        tabIndex="0"
        aria-hidden="true"
      >
        <Icon className="icon" icon={Arrow} />
      </div>
    );
  };

  return <React.Fragment>{renderGoTopIcon()}</React.Fragment>;
};

export default ScrollUp;
