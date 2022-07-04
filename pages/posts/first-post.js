import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react"
import Head from "next/head";
import Script from "next/script";
import {Layout} from "../../components/layout";

//kofiwidget2.init('Support Me on Ko-fi', '#29abe0', 'F1F13NAXL');kofiwidget2.draw();
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      {/* <Script
        src="https://storage.ko-fi.com/cdn/widget/Widget_2.js"
        onLoad={function () {
          kofiwidget2.init("Support Me on Ko-fi", "#29abe0", "F1F13NAXL");
          kofiwidget2.draw();
        }}
      /> */}
      <h1>First Post!!!2</h1>
      <h2>
        <Link href="/"><a>Home</a></Link>
      </h2>
      <div>
        <a href="/">Plain link home</a>
      </div>
      <Image
        src="/images/profile.jpg"
        height={200}
        width={200}
        alt="me and cat"
      />
    </Layout>
  );
}