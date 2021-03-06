import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const DataTester = () => {
  const handleSubmit = () => {
    const url = "https://lambda-guess-who.herokuapp.com/api/auth";
    axiosWithAuth()
      .get(url)
      .then(res => {
        console.log(res);
        // localStorage.setItem("token", res.data.payload);
        // formikBag.props.history.push("/guesswho");
      })
      .catch(e => {
        console.log(e.response);
      });
  };
  return <button onClick={handleSubmit} />;
};

export default DataTester;
