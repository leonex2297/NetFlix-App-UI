import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
function App(){
    return(
    <>
        <h1>NETFLIX</h1>
        <h2> Top 5 Netflix Series </h2>

        {Sdata.map((val) => {
            return (
                <Card key={val.id} 
                    imgsrc={val.imgsrc}
                    title={val.title}
                    sname={val.sname}
                    link={val.link}
                />
            );
        })}
    </>
    );
}
export default App;