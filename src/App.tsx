import React from "react";
import "./App.css";
import { Person, Country } from "./components/Person";

const { Taiwan } = Country;

function App() {
  //  賦予function 傳入與return參數的型別
  const getAge = (name: string): number => {
    return 111;
  };

  return (
    <div className="App">
      <article className="mx-5 text-center">
        <Person
          name="Jessie"
          email="jessie.hu@airabbi.com"
          age={30}
          isMarried={false}
          friends={["A", "B", "C"]}
          country={Taiwan}
        />
      </article>
    </div>
  );
}

export default App;
