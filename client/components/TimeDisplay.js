import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import React from 'react';

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

//constants for how many seconds are in a minute, hour, and day

const timerProps = {
    //animation
  isPlaying: true,
  //size of tiemer
  size: 80,
  //?
  strokeWidth: 6
};

const renderTime = (dimension, dimension2, mins, hours) => {
    //function to display the time, will pass something in
  return (
    <div className="px-2">
      <p className="text-sm text-green-400">{hours}</p>
      <p className="text-sm text-green-400">{dimension} and {mins} {dimension2}</p>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export default function TimeDisplay(props) {
//   const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds

// console.log(props)
const stratTime = new Date(props.props).getMinutes();
const startHours = new Date(props.props).getHours();
const endHours = new Date(Date.now()).getHours();
// console.log(stratTime)
//
// console.log(props)
//   const endTime = stratTime + 243248; // use UNIX timestamp in seconds
const endTime = new Date(Date.now()).getMinutes()

//   const remainingTime = endTime - stratTime;
const remainingTime = stratTime
  console.log(remainingTime)

  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <div >
  
      <CountdownCircleTimer
      className="ml-50"
        {...timerProps}
        //animation, size of timer
        colors={[["#EF798A"]]}

        duration={minuteSeconds}
        //you want to render the amount of time passed since startDate
        // initialRemainingTime={remainingTime % hourSeconds}
        initialRemainingTime = {stratTime}

        onComplete={(totalElapsedTime) => [
        //   remainingTime - totalElapsedTime > minuteSeconds
            totalElapsedTime
        ]}
      >
        {({ elapsedTime }) =>
        //   renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
        renderTime("hours", "mins", Math.abs(endTime - stratTime), endHours - startHours)
        }
      </CountdownCircleTimer>

    </div>
  );
}
