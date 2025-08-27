import LightBox from "./LightBox";
import { useState, useEffect } from "react";

const TrafficLightSystem = () => {
  const TRAFFIC_STATES = {
    NS_GREEN_EW_RED: {
      northSouth: "green",
      eastWest: "red",
      duration: 8000,
      nextState: "NS_YELLOW_EW_RED",
      description: "North-South Green, East-West Red",
    },
    NS_YELLOW_EW_RED: {
      northSouth: "yellow",
      eastWest: "red",
      duration: 2000,
      nextState: "ALL_RED_1",
      description: "North-South Yellow, East-West Red",
    },
    ALL_RED_1: {
      northSouth: "red",
      eastWest: "red",
      duration: 1000,
      nextState: "NS_RED_EW_GREEN",
      description: "All Red (Transition 1)",
    },
    NS_RED_EW_GREEN: {
      northSouth: "red",
      eastWest: "green",
      duration: 8000,
      nextState: "NS_RED_EW_YELLOW",
      description: "North-South Red, East-West Green",
    },
    NS_RED_EW_YELLOW: {
      northSouth: "red",
      eastWest: "yellow",
      duration: 2000,
      nextState: "ALL_RED_2",
      description: "North-South Red, East-West Yellow",
    },
    ALL_RED_2: {
      northSouth: "red",
      eastWest: "red",
      duration: 1000,
      nextState: "NS_GREEN_EW_RED",
      description: "All Red (Transition 2)",
    },
  };

  const [currentState, setCurrentState] = useState("NS_GREEN_EW_RED");
  const [isRunning, setIsRunning] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(
    TRAFFIC_STATES["NS_GREEN_EW_RED"].duration
  );

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 100) {
            const nextState = TRAFFIC_STATES[currentState].nextState;
            setCurrentState(nextState);
            return TRAFFIC_STATES[nextState].duration;
          }
          return prev - 100;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRunning, currentState]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCurrentState("NS_GREEN_EW_RED");
    setTimeRemaining(TRAFFIC_STATES["NS_GREEN_EW_RED"].duration);
  };

  const currentConfig = TRAFFIC_STATES[currentState];
  const nsLight = currentConfig.northSouth;
  const ewLight = currentConfig.eastWest;

  return (
    <div className="p-5 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Traffic Light System
      </h1>
      <h3 className="text-xl font-semibold mb-4 text-center">Approach</h3>
      <div className="bg-gray-200 p-6 rounded-lg shadow-md mb-6 max-w-4xl mx-auto">
        <p className="text-center text-lg text-gray-600 mb-8">
          Approach: NS_GREEN_EW_RED → NS_YELLOW_EW_RED → ALL_RED_1 →
          NS_RED_EW_GREEN
        </p>
        <p className="text-center text-lg text-gray-600 mb-8">
          → NS_RED_EW_YELLOW → ALL_RED_2 → NS_GREEN_EW_RED (and repeat) in every
          cycle
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6 max-w-2xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <button
            onClick={handleStart}
            disabled={isRunning}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-semibold rounded"
          >
            Start
          </button>
          <button
            onClick={handleStop}
            disabled={!isRunning}
            className="px-6 py-3 bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white font-semibold rounded-md"
          >
            Stop
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded"
          >
            Reset
          </button>
        </div>

        <div className="text-center">
          <p className="text-lg mb-2">
            <span className="font-bold">Status:</span>{" "}
            {isRunning ? "Running" : "Stopped"}
          </p>
          <p className="text-lg mb-2">
            <span className="font-bold">Current State:</span> {currentState}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            {currentConfig.description}
          </p>
          <p className="text-lg">
            <span className="font-bold">Time Remaining:</span>{" "}
            {Math.ceil(timeRemaining / 1000)}s
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center mb-8">
        <LightBox id={1} currentLight={nsLight} direction="North-South" />
        <LightBox id={2} currentLight={ewLight} direction="East-West" />
        <LightBox id={3} currentLight={nsLight} direction="North-South" />
        <LightBox id={4} currentLight={ewLight} direction="East-West" />
      </div>
    </div>
  );
};
export default TrafficLightSystem;
