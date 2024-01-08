import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch(`https://api.github.com/users/Mustaqim-Alam`)
//       .then((Response) => Response.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, []);


//>>>>>>>>

    const data = useLoaderData();

  return (
    <div className=" text-center p-5 text-3xl bg-yellow-600 ">
      Github: {data.followers}
      <img width={300} src={data.avatar_url} alt="GitPic" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch(`https://api.github.com/users/Mustaqim-Alam`)
    return response.json()
};
