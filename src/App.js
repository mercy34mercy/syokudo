import React from "react";
import "./App.css"
import useFetch  from "./getdata";

const  App = () => {
    const { data, isLoading, isError } = useFetch("https://syokudo-prod.azurewebsites.net/tableinfo/user");
    const timenow = new Date()


    if(isLoading) {
      return <p>...loading</p>
    }
    
    if(isError) {
      return <p>Error!</p>
    }

  return (

    <ul Class="SeatList">
      {data.map((d,index) => (
        <li key={index}
          style={ {  listStyle: "none",}}>
          <button
            type="button"
            style={
              (timenow - new Date(d.Time) )< 1000
                ? {
                  width: "50%",
                  textAlign: "center",
                  backgroundColor: "#adadad",
                  color: "#f1f1f1",
                  padding: "0.5rem",
                }
                : ((timenow - new Date(d.Time) ) / (60*1000)) < 5
                  ? {
                    width: "50%",
                    textAlign: "center",
                    backgroundColor: "#915f31",
                    color: "#f1f1f1",
                    padding: "0.5rem",
                  }
                  : (((timenow -  new Date(d.Time) ) / (60*1000)) < 10)
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
          </button>
        </li>

      ))
      }
    </ul >
  );
}

export default App;







