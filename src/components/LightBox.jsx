import React from "react";
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

function TrafficLightBox({ id, currentLight, direction }) {
  return (
    <div className="border-2 border-gray-500 p-5 m-2 rounded-lg bg-gray-100 w-40">
      <h4 className="text-center mb-3 font-bold">Light {id}</h4>
      <p className="text-center text-sm text-gray-600 mb-3">{direction}</p>
      <div className="bg-gray-950 p-4 rounded">
        <div
          className={`w-10 h-10 rounded-full mx-auto mb-2 ${
            currentLight === "red" ? "bg-red-500" : "bg-gray-600"
          }`}
        ></div>
        <div
          className={`w-10 h-10 rounded-full mx-auto mb-2 ${
            currentLight === "yellow" ? "bg-yellow-400" : "bg-gray-600"
          }`}
        ></div>
        <div
          className={`w-10 h-10 rounded-full mx-auto ${
            currentLight === "green" ? "bg-green-500" : "bg-gray-600"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default TrafficLightBox;
