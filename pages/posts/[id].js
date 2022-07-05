import Head from "next/head";
import { Date } from "../../components/Date";
import { Layout } from "../../components/layout";
import { getPost, getPostIds } from "../../lib/posts";
import utilStyles from '../../styles/utils.module.css';

export function getStaticPaths() {
  const ids = getPostIds();
  // return { paths: ids.map((id) => `/posts/${id}`), fallback: false }
  return { paths: ids.map((id) => ({params: {id}})), fallback: true }
}

export async function getStaticProps({params}) {
  return { props: await getPost(params.id) };
}

export default function Post({title, html, date}) {

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      <div className={utilStyles.lightText}>
          <Date dateString={date} />
        </div>      
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}