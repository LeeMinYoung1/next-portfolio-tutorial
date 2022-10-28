import Image from "next/image";

export default function ProjectItem({data}){

    const title = data.properties.Name.title[0].plain_text
    const github = data.properties.Github.url
    const youtube = data.properties.Youtube.url
    const description = data.properties.Description.rich_text[0].plain_text
    const imgSrc = data.cover.file?.url || data.cover.external.url
    const tags = data.properties.Tags.multi_select


    return (
        <div className="flex flex-col m-3 bg-slate-700 rounded-xl w-full">

            <Image
                className="rounded-t-xl"
                src={imgSrc}
                alt="cover image"
                width="100%"
                height="60%"
                layout="responsive"
                objectFit="cover"
                quality={100}
            />

            <div className="p-4 flex flex-col">
                <h1>{title}</h1>
                <h3>{description}</h3>
                <a href={github}>깃허브 바로가기</a>
                <a href={youtube}>유튜브 시연영상 보러가기</a>

                <div className="flex items-start mt-2">
                    {}

                </div>

            </div>
           
        </div>
    );
}