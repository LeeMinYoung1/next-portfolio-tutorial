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

// 빌드 타임에 호출
export async function getServerSideProps() {

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
      
    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
       
    const projects = await res.json()

    const projectIds = projects.results.map((aProject) =>(
        aProject.id
    ))

    console
    

    return {
      props: {}, // will be passed to the page component as props
    }
  }