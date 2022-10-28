import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";
import ProjectItem from "../components/projects/project-item";

export default function Projects({projects}) {

    console.log(projects);

    return (
        <Layout >
            <div className="flex flex-col items-center justify-center min-h-screen px-5 py-24 mb-10">
            <Head>
                <title>이민영 포트폴리오</title>
            <meta name="description" content="이민영 포트폴리오" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="text-4xl font-bold sm:text-6xl">총 프로젝트 : {projects.results.length}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8 sm:w-full">
                {projects.results.map((aProject) => (
                    <ProjectItem key={aProject.id} data={aProject} />
                ))}
            </div>
            </div>
            
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

    const projectNames = projects.results.map((aProject) =>(
        aProject.properties.Name.title[0].plain_text
    ))

    console.log(`projectNames : ${projectNames}`);
    

    return {
      props: {projects}, // will be passed to the page component as props
    }
  }