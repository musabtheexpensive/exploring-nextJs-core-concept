import Counter from "@/components/Counter/Counter";
import Link from "next/link";

const HomePage = () => {
  // throw new Error();
  return (
    <div>
      {/* <h1>This Is Next App</h1> */}
      <Counter></Counter>
      <Link href="/about">
        <button className="btn btn-accent">About</button>
      </Link>
      <Link href="/contact">
        <button className="btn btn-success">contact</button>
      </Link>
    </div>
  );
};

export default HomePage;
