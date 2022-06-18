import axios from "axios";

const getData = async (path) => {
  const data = await axios
    .request({
      method: "GET",
      url: `https://covid-19-statistics.p.rapidapi.com/${path}`,
      headers: {
        "X-RapidAPI-Key": "bdb7eaf2demshce7bcd6b0bc8993p19b3e1jsn82a4d65cfafb",
        "X-RapidAPI-Host": "covid-19-statistics.p.rapidapi.com",
      },
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
  return data;
};
export const getSelectData = async (path) => {
  const data = await axios
    .request({
      method: "GET",
      url: `https://covid-19-statistics.p.rapidapi.com/reports`,
      iso: `${path}`,
      headers: {
        "X-RapidAPI-Key": "bdb7eaf2demshce7bcd6b0bc8993p19b3e1jsn82a4d65cfafb",
        "X-RapidAPI-Host": "covid-19-statistics.p.rapidapi.com",
      },
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
  return data;
};

export default getData;

// const options = {
//   method: "GET",
//   url: `https://covid-19-statistics.p.rapidapi.com/regions`,
//   headers: {
//     "X-RapidAPI-Key": "bdb7eaf2demshce7bcd6b0bc8993p19b3e1jsn82a4d65cfafb",
//     "X-RapidAPI-Host": "covid-19-statistics.p.rapidapi.com",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
