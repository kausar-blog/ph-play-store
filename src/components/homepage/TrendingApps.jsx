// import React, { use } from "react";
// import { useLoaderData } from "react-router";

import { useEffect, useState } from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import AppCard from "../ui/AppCard";

// const appsPromise = fetch("/data.json").then((res) => res.json());

const TrendingApps = () => {
  // const apps = use(appsPromise);
  // console.log(apps, "apps");

  // const data = useLoaderData();
  // console.log(data, "data");

  const [apps, setApps] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      console.log(data);
      setApps(data);
      // setApps(data.apps);
    };
    fetchData();
  }, []);

  console.log(apps, "apps");

  return (
    <>
      <div className="container mx-auto">
        {" "}
        <div className="mb-8">
          <h2 className="font-bold text-4xl">Trending apps</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
            soluta accusantium consequuntur vel necessitatibus nihil itaque
            natus nesciunt cum doloremque.
          </p>
        </div>
        Total apps:{apps.length}
        <div className="flex justify-between flex-wrap">
          {apps.map((app, index) => {
            return <AppCard app={app} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default TrendingApps;
