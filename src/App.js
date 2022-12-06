import React from "react";
import "./App.css"

function App() {
  const menus = [
    { title: "座席1", content: "Tableid=1", cardid: "cardid=1", seat: "満席", min: 30, },
    { title: "座席2", content: "Tableid=1", cardid: "cardid=2", seat: "満席", min: 20,  },
    { title: "座席3", content: "Tableid=1", cardid: "cardid=3", seat: "満席", min: 10,  },
    { title: "座席4", content: "Tableid=null", cardid: "cardid=null", seat: "空席", min: 0,  },
    { title: "座席5", content: "Tableid=1", cardid: "cardid=1", seat: "満席", min: 30,  },
    { title: "座席6", content: "Tableid=1", cardid: "cardid=2", seat: "満席", min: 20,  },
    { title: "座席7", content: "Tableid=1", cardid: "cardid=3", seat: "満席", min: 10,  },
    { title: "座席8", content: "Tableid=null", cardid: "cardid=null", seat: "空席", min: 0, },
    { title: "座席9", content: "Tableid=1", cardid: "cardid=1", seat: "満席", min: 30, },
    { title: "座席10", content: "Tableid=1", cardid: "cardid=2", seat: "満席", min: 20,  },
    { title: "座席11", content: "Tableid=1", cardid: "cardid=1", seat: "満席", min: 30,  },
    { title: "座席12", content: "Tableid=1", cardid: "cardid=2", seat: "満席", min: 20,  },
    { title: "座席13", content: "Tableid=1", cardid: "cardid=3", seat: "満席", min: 10,  },
    { title: "座席14", content: "Tableid=null", cardid: "cardid=null", seat: "空席", min: 0, },
    { title: "座席15", content: "Tableid=1", cardid: "cardid=1", seat: "満席", min: 30,  },
    { title: "座席16", content: "Tableid=1", cardid: "cardid=2", seat: "満席", min: 20,  },
    { title: "座席17", content: "Tableid=1", cardid: "cardid=3", seat: "満席", min: 10,  },
    { title: "座席18", content: "Tableid=null", cardid: "cardid=null", seat: "空席", min: 0, },
    { title: "座席19", content: "Tableid=1", cardid: "cardid=1", seat: "満席", min: 30, },
    { title: "座席20", content: "Tableid=1", cardid: "cardid=2", seat: "満席", min: 20, },
    { title: "座席21", content: "Tableid=1", cardid: "cardid=1", seat: "満席", min: 30, },
    { title: "座席22", content: "Tableid=1", cardid: "cardid=2", seat: "満席", min: 20, },
    { title: "座席23", content: "Tableid=1", cardid: "cardid=3", seat: "満席", min: 10, },
    { title: "座席24", content: "Tableid=null", cardid: "cardid=null", seat: "空席", min: 0, },
    { title: "座席25", content: "Tableid=1", cardid: "cardid=1", seat: "満席", min: 30, },
    { title: "座席26", content: "Tableid=1", cardid: "cardid=2", seat: "満席", min: 20, },
    { title: "座席27", content: "Tableid=1", cardid: "cardid=3", seat: "満席", min: 10, },
    { title: "座席28", content: "Tableid=null", cardid: "cardid=null", seat: "空席", min: 0, },
    { title: "座席29", content: "Tableid=1", cardid: "cardid=1", seat: "満席", min: 30, },
    { title: "座席30", content: "Tableid=1", cardid: "cardid=2", seat: "満席", min: 20, },
    { title: "座席31", content: "Tableid=1", cardid: "cardid=1", seat: "満席", min: 30, },
    { title: "座席32", content: "Tableid=1", cardid: "cardid=2", seat: "満席", min: 20, },
    { title: "座席33", content: "Tableid=1", cardid: "cardid=3", seat: "満席", min: 10, },
    { title: "座席34", content: "Tableid=null", cardid: "cardid=null", seat: "空席", min: 0,  },
    { title: "座席35", content: "Tableid=1", cardid: "cardid=1", seat: "満席", min: 30,  },
    { title: "座席36", content: "Tableid=1", cardid: "cardid=2", seat: "満席", min: 20,},
    { title: "座席37", content: "Tableid=1", cardid: "cardid=3", seat: "満席", min: 10,},
    { title: "座席38", content: "Tableid=null", cardid: "cardid=null", seat: "空席", min: 0,  },
    { title: "座席39", content: "Tableid=1", cardid: "cardid=1", seat: "満席", min: 30, },
    { title: "座席40", content: "Tableid=1", cardid: "cardid=2", seat: "満席", min: 20,  },
  ];

  return (
    <ul class="SeatList">
      {menus.map((menu) => (
        <li key={menu}
          style={ {  listStyle: "none",}}>
          <button
            type="button"
            style={
              menu.min === 0
                ? {
                  width: "50%",
                  textAlign: "center",
                  backgroundColor: "#adadad",
                  color: "#f1f1f1",
                  padding: "0.5rem",
                }
                : menu.min < 15
                  ? {
                    width: "50%",
                    textAlign: "center",
                    backgroundColor: "#915f31",
                    color: "#f1f1f1",
                    padding: "0.5rem",
                  }
                  : menu.min < 30
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
            {menu.title}
          </button>
        </li>
      ))
      }
    </ul >
  );
}

export default App;







