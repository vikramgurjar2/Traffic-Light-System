function TrafficLightBox({ id, currentLight }) {
  return (
    <div className="border-2 border-gray-600 p-5 m-2 rounded-lg bg-gray-100 w-40">
      <h4 className="text-center mb-3 font-bold">Light {id}</h4>
      <div className="bg-gray-800 p-4 rounded">
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
