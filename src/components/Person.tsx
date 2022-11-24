import { useState } from "react";

interface Props {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  friends: string[];
  notHaveTo?: string; //  變數不一定需要存在的時候, 可以加個問號
  country: string;
}

export enum Country {
  Taiwan = "Taiwan",
  UK = "UK",
  Japan = "Japan",
}

export const Person = (props: Props) => {
  const { name, email, age, isMarried, friends, notHaveTo, country } = props;
  const [text, setText] = useState<string>("111");

  return (
    <div>
      <h1> Name: {name}</h1>
      <h1> Email: {email}</h1>
      <h1> Age: {age}</h1>
      <h1> This person {isMarried ? "is" : "is not"} Married.</h1>
      {friends.map((val: string) => {
        return <h1 key={val}>{val}</h1>;
      })}
      <h1> Maybe variable don't have to exists. Variable:【{notHaveTo}】 </h1>
      <h1> Country:{country} </h1>
      <h1>{text}</h1>
    </div>
  );
};
