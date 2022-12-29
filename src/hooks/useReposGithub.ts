import { useState } from "react";

export default function useGithubRepos() {

    interface IGithubRepos {
        name: string;
        topics: [];
        html_url: string;
        description: string;
        id: number;

    }
 

    function dataReposGithub(data: [], keyWordDeploy: string) {
        let dataFilter = []
        dataFilter = data.filter((item: IGithubRepos) => {
            return item.topics.includes(keyWordDeploy as never)
        })

        return dataFilter.map((item: IGithubRepos) => {
            return {
                id: item.id,
                name: item.name,
                html_url: item.html_url,
                description: item.description,
                topics: item.topics
            }
        })


    }

    const nameSkills = {
        css3:"https://user-images.githubusercontent.com/59892368/208771160-2a57082c-071a-454a-b3f6-cf5b2135697a.svg",
        expo:'https://user-images.githubusercontent.com/59892368/209395378-b0aadca6-2598-4e31-9353-9d78421907e6.svg',
        html5:"https://user-images.githubusercontent.com/59892368/208770459-2be4e818-90af-46f9-b522-c64ea2a759a2.svg",
        javascript:'https://user-images.githubusercontent.com/59892368/208769323-5bef675a-60bb-4cdb-8928-57f975798f6e.svg',
        nextjs:"https://user-images.githubusercontent.com/59892368/209393010-83e72f30-e9c7-4f36-9ce9-40fe575a35fe.svg",
        nodejs:'https://user-images.githubusercontent.com/59892368/208769129-dde49b63-4d6a-410a-b3be-84db7e797659.svg',
        react:'https://user-images.githubusercontent.com/59892368/208769131-315a6974-54d6-4a9b-9eef-4dc31b20bf91.svg',
        reacticons:"https://user-images.githubusercontent.com/59892368/197551891-5fcd2eca-9cd9-4dfd-88b9-7b0f533d4d73.png",
        sass:"https://user-images.githubusercontent.com/59892368/209394786-65d6f861-c7a9-4b8b-9f31-8ed2b1ce4dd8.svg",
        styledcomponents:"https://user-images.githubusercontent.com/59892368/163742043-d6c47b38-187c-47d5-8d09-b1870b86b612.png",
        typescript:'https://user-images.githubusercontent.com/59892368/208769327-af1b32ca-155d-4617-a29c-ecee9de6b289.svg',
    };
    
    const iconsProjects = {
        dashboard:'https://user-images.githubusercontent.com/59892368/209398825-020920ee-fc40-4723-a599-fbf8a8d47b6d.png',
        education:'https://user-images.githubusercontent.com/59892368/209398823-1ef81c8b-7125-4caa-8c2e-de13190e9304.png',
        personalwebsite:'https://user-images.githubusercontent.com/59892368/209398820-cba5a978-fed2-4145-a2fa-0478b824f812.png',
        productivity: 'https://user-images.githubusercontent.com/59892368/209398896-681b8c67-41c5-4498-8f3f-8bbf9a341a4a.svg',
        
    };
   

    /*
    const indexSubs = data.map((item)=>{
        return item.topics.indexOf('deploy') 
      })
      
      
      
       data.forEach((item,index)=>{
        return item.topics.splice(indexs[index],1)
      })
      
      console.log(data)
*/

    return {
        'dataReposGithub': dataReposGithub,
        "iconSkills" : nameSkills,
        "iconsProjects":iconsProjects

    }
}