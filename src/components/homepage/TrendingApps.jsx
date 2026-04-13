import React from "react";

const appsPromise = fetch("/data.json").then((res) => res.json());

const TrendingApps = () => {
  const apps = appsPromise;

  console.log(apps);
  return (
    <>
      <div className="mb-8">
        <h2 className="font-bold text-4xl">Trending apps</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
          soluta accusantium consequuntur vel necessitatibus nihil itaque natus
          nesciunt cum doloremque.
        </p>
      </div>
    </>
  );
};

export default TrendingApps;
