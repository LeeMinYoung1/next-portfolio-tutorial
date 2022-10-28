export default function ProjectItem({data}){

    const projectTitle = data.properties.Name.title[0].plain_text
    const 


    return (
        <div className="p-6 m-3 bg-slate-400 rounded-md">
            <h1>{projectTitle}</h1>
        </div>
    );
}