import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";

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

// 빌드 타임이 아닌 변경 될 때마다 호출
export async function getServerSideProps() {

    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Notion-Version': '2022-06-28',
          'content-type': 'application/json',
          Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({page_size: 100})
    };
      
    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
       
    const result = await res.json()

    

    return {
      props: {}, // will be passed to the page component as props
    }
  }