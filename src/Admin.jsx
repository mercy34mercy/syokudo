import React, { useEffect, useState } from "react";
import "./App.css"
import DigitalClock from "./Clock";
import useFetch  from "./getdata";
import Name from "./Name";
import useTime from "./UseTime";

const Admin = () => {
    const { data, isLoading, isError } = useFetch("https://syokudo-prod.azurewebsites.net/tableinfo/admin");
    const timenow = new Date()



    // var time = useTime(1000)


    if(isLoading) {
      return <p>...loading</p>
    }
    
    if(isError) {
      return <p>Error!</p>
    }

  return (
    <div>
    {/* <DigitalClock time={time}></DigitalClock> */}
    <ul Class="SeatList">
      {data.map((d,index) => (
        <li key={index}
          style={ {  listStyle: "none",}}>
          <button
            type="button"
            style={
              timenow - new Date(d.Time) < 1000
                ? {
                  width: "50%",
                  textAlign: "center",
                  backgroundColor: "#adadad",
                  color: "#f1f1f1",
                  padding: "0.5rem",
                }
                : (timenow - d.Time / (60*1000)) < 15
                  ? {
                    width: "50%",
                    textAlign: "center",
                    backgroundColor: "#915f31",
                    color: "#f1f1f1",
                    padding: "0.5rem",
                  }
                  : (timenow - d.Time / (60*1000)) < 30
                    ? {
                      width: "50%",
                      textAlign: "center",
                      backgroundColor: "#47ae47",
                      color: "#f1f1f1",
                      padding: "0.5rem",
                    }
                    : {
                      width: "50%",
                      textAlign: "center",
                      backgroundColor: "#004c00",
                      color: "#f1f1f1",
                      padding: "0.5rem",
                    }}
          >
            {"座席番号"+(index+1)}
            <Name name={d.Name}></Name>
          </button>
        </li>

      ))
      }
    </ul >
    </div>
  );
}

export default Admin;