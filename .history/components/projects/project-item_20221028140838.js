export default function ProjectItem({data}){

    const title = data.properties.Name.title[0].plain_text
    const githubLink = data.properties.Github.url


    return (
        <div className="p-6 m-3 bg-slate-400 rounded-md">
            <h1>{title}</h1>
            <a href={githubLink}>깃허브 바로가기</a>
        </div>
    );
}