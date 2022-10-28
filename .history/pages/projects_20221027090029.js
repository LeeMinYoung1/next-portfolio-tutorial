import Layout from "../components/layout";
import Head from "next/head";

export default function Projects(children) {
    return (
        <Layout>
            <Head>
            <title>이민영 포트폴리오</title>
            <meta name="description" content="이민영 포트폴리오" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>프로젝트</h1>
        </Layout>
    );
}

export async function getStaticProps() {

    const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Notion-Version': '2022-02-22',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({page_size: 100})
    };
      
    fetch('https://api.notion.com/v1/databases/database_id/query', options)
    .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));


    return {
      props: {}, // will be passed to the page component as props
    }
  }