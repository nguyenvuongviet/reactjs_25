import { useState } from "react";
import data from "./dataGlasses.json";

export default function Glasses() {
  const [selectedGlasses, setSelectedGlasses] = useState(data[0]);

  const handleSelectGlasses = (glasses) => {
    setSelectedGlasses(glasses);
  };

  return (
    <div className="bg-cover bg-center min-h-screen flex flex-col mx-auto bg-slate-500 ">
      <div className="bg-black bg-opacity-50 p-5 mb-8">
        <h1 className="text-2xl font-bold text-center text-white">
          TRY GLASSES APP ONLINE
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="relative flex justify-center items-center">
          <img className="w-1/2" src="./glassesImage/model.jpg" alt="Model" />
          <img
            className="absolute top-1/4 w-1/4"
            src={selectedGlasses.url}
            alt={selectedGlasses.name}
          />
          <div className="absolute bottom-0 w-1/2 p-3 bg-black bg-opacity-50 text-white">
            <h2 className="text-sm font-bold whitespace-normal break-words">
              {selectedGlasses.name}
            </h2>
            <p className="text-xs whitespace-normal break-words">
              {selectedGlasses.desc}
            </p>
            <p className="text-sm font-semibold">${selectedGlasses.price}</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img className="w-1/2" src="./glassesImage/model.jpg" alt="" />
        </div>
      </div>
      <div className="mt-8 mb-14 text-center bg-white w-10/12 mx-auto">
        <h2 className="text-xl font-bold p-2">Choose Your Glasses</h2>
        <div className="grid grid-cols-6 gap-4 p-4 mb-4">
          {data.map((glasses) => (
            <div
              key={glasses.id}
              onClick={() => handleSelectGlasses(glasses)}
              className="cursor-pointer p-2 border rounded hover:shadow-lg"
            >
              <img className="w-full" src={glasses.url} alt={glasses.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
