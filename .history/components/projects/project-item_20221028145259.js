import Image from "next/image";

export default function ProjectItem({data}){

    const title = data.properties.Name.title[0].plain_text
    const github = data.properties.Github.url
    const youtube = data.properties.Youtube.url
    const description = data.properties.Description.rich_text[0].plain_text
    const imgSrc = data.cover.file?.url || data.cover.external.url


    return (
        <div className="flex flex-col m-3 bg-slate-700 rounded-xl">

            <Image
                className="rounded-t-xl"
                src={imgSrc}
                alt="cover image"
                width="100%"
                height="60%"
                layout="responsive"
                objectFit="none"
                quality={100}
            />

            <div>

            </div>
           
        </div>
    );
}