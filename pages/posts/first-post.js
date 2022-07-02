import Link from "next/link";
import { Fragment } from "react"

export default function FirstPost() {
  return (
    <Fragment>
      <h1>First Post!!!2</h1>
      <h2>
        <Link href="/"><a>Home</a></Link>
      </h2>
      <div>
        <a href="/">Plain link home</a>
      </div>
    </Fragment>
  );
}