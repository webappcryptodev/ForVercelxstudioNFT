import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const CountDownTimer = ({className}) => {
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const endTime = new Date("29 April 2023 9:56:00 GMT+01:00");

    interval = setInterval(() => {
      const now = new Date();
      const timeLeft = endTime - now;

      // const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      if (timeLeft < 0) {
        // stop timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(interval);
  },[]);

  return (
    <div className={`block_timer ${className} z-1 top-3.5 left-3.5`}>
      <div className="flex justify-center items-center space-x-3">
        <span className="bg-tag-brand shadow text-white text-sm sm:text-base font-semibold px-4 py-2 rounded">
          {timerHours}
        </span>
        <FontAwesomeIcon icon={faEllipsisV} size="3x" />
        <span className="bg-tag-brand shadow text-white text-sm sm:text-base font-semibold px-4 py-2 rounded">
          {timerMinutes}
        </span>
        <FontAwesomeIcon icon={faEllipsisV} size="3x" />
        <span className="bg-tag-brand shadow text-white text-sm sm:text-base font-semibold px-4 py-2 rounded">
          {timerSeconds}
        </span>
      </div>
    </div>
  );
};

export default CountDownTimer;
