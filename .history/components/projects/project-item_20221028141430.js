export default function ProjectItem({data}){

    const title = data.properties.Name.title[0].plain_text
    const github = data.properties.Github.url
    const youtube = data.properties.Youtube.url


    return (
        <div className="flex flex-col p-6 m-3 bg-slate-700 rounded-md">
            <h1>{title}</h1>
            <a href={github}>깃허브 바로가기</a>
            <a href={youtube}>유튜브 시연영상 보러가기</a>
        </div>
    );
}