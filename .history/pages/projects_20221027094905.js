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
        body: JSON.stringify({
            sorts: [
                {
                    "property": "Name",
                    "direction": "ascending"
                }
            ],
            page_size: 100
        })
      };

    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)

    const projects = await res.json()

    const projectNames = projects.results.map((aProject, index) =>(
        aProject.properties.Name.title[0].plain_text
    ))

    console.log(`projectNames : ${projectNames}`);

    return {
      props: {}, // will be passed to the page component as props
      // getStaticProps() 메소드를 사용한다면 revalidate 로 데이터 변경시 갱신가능!
      // revalidate: 1 // 데이터 변경이 있으면 갱신 1초 마다
    }
}