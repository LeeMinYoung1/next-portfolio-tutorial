import Image from "next/image";

export default function ProjectItem({data}){

    const title = data.properties.Name.title[0].plain_text
    const github = data.properties.Github.url
    const youtube = data.properties.Youtube.url
    const description = data.properties.Description.rich_text[0].plain_text
    const imgSrc = data.cover.file?.url || data.cover.external.url


    return (
        <div className="flex flex-col p-6 m-3 bg-slate-700 rounded-md">

            <Image
                src={imgSrc}
                alt="cover image"
                width="100%"
                height="60%"
                layout="responsive"
                objectFit="none"
                quality={100}
            />

            <h1>{title}</h1>
            <h3>{description}</h3>
            <a href={github}>깃허브 바로가기</a>
            <a href={youtube}>유튜브 시연영상 보러가기</a>
        </div>
    );
}