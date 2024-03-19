import { Audio } from "react-loader-spinner";
import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res => res.json())
    // .then(data=> setPhones(data.data))

    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phonesWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        setPhones(phonesWithFakeData);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading && <div className="flex items-center justify-center">
        <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      /> </div>
      }
      <h2 className="text-5xl">Phones: {phones.length}</h2>
      <BarChart width={1900} height={400} data={phones}>
        <Bar dataKey="price" fill="#8884d8" />
        <YAxis dataKey="price"></YAxis>
        <XAxis dataKey="name"></XAxis>
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default Phones;
