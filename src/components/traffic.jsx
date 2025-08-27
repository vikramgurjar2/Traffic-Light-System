import LightBox from "./LightBox";
import { useState, useEffect } from "react";

const TrafficLightSystem = () => {
  const [currentIndx, setcurrentIndx] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const lights = ["red", "green", "yellow"];

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setcurrentIndx((prev) => (prev + 1) % lights.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const currentLight = lights[currentIndx];

  return (
    <div className="p-5 bg-white min-h-screen">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold mb-6">Traffic Light System</h1>
      </div>

      <div className="mb-6 flex justify-center items-center">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`px-6 py-3 text-white font-semibold rounded mr-4 ${
            isRunning
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {isRunning ? "Stop" : "Start"}
        </button>

        <span className="text-lg">
          Status: {isRunning ? "Running" : "Stopped"}
        </span>
      </div>

      <div className="flex flex-wrap justify-center">
        <LightBox id={1} currentLight={currentLight} />
        <LightBox id={2} currentLight={currentLight} />
        <LightBox id={3} currentLight={currentLight} />
        <LightBox id={4} currentLight={currentLight} />
      </div>

      <div className="mt-6 text-center">
        <p className="text-xl">
          Current Light:{" "}
          <span
            className={`font-bold ${
              currentLight === "red"
                ? "text-red-500"
                : currentLight === "yellow"
                ? "text-yellow-500"
                : "text-green-500"
            }`}
          >
            {currentLight.toUpperCase()}
          </span>
        </p>
      </div>
    </div>
  );
};
export default TrafficLightSystem;
