export default function ProjectItem({data}){
    return (
        <div className="p-6">
            <h1>{data.properties.Name.title[0].plain_text}</h1>
        </div>
    );
}