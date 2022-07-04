import Head from "next/head";
import { Layout } from "../../components/layout";
import { getPost, getPostIds } from "../../lib/posts";

export function getStaticPaths() {
  const ids = getPostIds();
  return { paths: ids.map((id) => `/posts/${id}`), fallback: false }
}

export async function getStaticProps({params}) {
  return { props: await getPost(params.id) };
}

export default function Post({title, html}) {

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}