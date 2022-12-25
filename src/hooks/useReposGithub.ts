import { useState } from "react";

export default function useReposGitHub() {

    interface Provider {
        name: string;
        topics: [];
        html_url: string;
        description: string;
        id: number;

    }
    const [projects, setProjects] = useState<Provider[]>([])
    // const [projectDeploy, setProjectsDeploy] = useState([])

    function dataReposGithub(data: [], keyWordDeploy: string) {
        let dataFilter = []
        dataFilter = data.filter((item: Provider) => {
            return item.topics.includes(keyWordDeploy as never)
        })

        return dataFilter.map((item: Provider) => {
            return {
                id: item.id,
                name: item.name,
                html_url: item.html_url,
                description: item.description,
                topics: item.topics
            }
        })


    }

    return [
        dataReposGithub
       
    ]
}