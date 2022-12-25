
/* eslint-disable @next/next/no-img-element */
import { Footer } from '../../components/Footer'
import Image from 'next/image'
import { Header } from '../../components/Header'
import styles from './styles.module.scss'
import { useEffect, useState } from 'react'
import nameSkills from '../../utils/nameSkills'
import iconsProjects from '../../utils/iconsProjects'
import useReposGitHub from '../../hooks/useReposGithub'
export default function Projects() {

const [dataReposGithub]=useReposGitHub()

    
    interface Provider {
        name: string;
        topics: [];
        html_url: string;
        description: string;
        id: number;

    }


    const [projects, setProjects] = useState<Provider[]>([])

    useEffect(() => {
        fetch('https://api.github.com/users/digoarthur/repos')
            .then(response => response.json())
            .then(data =>setProjects(dataReposGithub(data,'deploy')))
    }, [])

   
   

  
    return (

        <div className={styles.projects_Container}>
            <Header />

            <main className={styles.main_Container}>
                <div className={styles.main_Content}>
                    <h1>Projetos desevolvidos</h1>
                    <p>Essa página lista os <strong>{projects.length}</strong> principais projetos que venho desenvolvendo durante a minha jornada como programador.</p>

                    <div className={styles.card_Container}>
                        {projects.map((element) => {
                            return (
                                <a key={element.id} href={element.html_url} className={styles.card}>
                                    {
                                        element.topics.map((item) => {
                                            return (
                                                iconsProjects[item] ? (  <picture key={item}><img  src={iconsProjects[item]}></img> </picture>) : ''
                                            )
                                        })
                                    }
                                    <h2>{element.name}</h2>
                                    <p>{element.description}</p>
                                    <footer className={styles.card_Footer}>
                                        {
                                            element.topics.map((item) => {
                                                return (
                                                    item == "deploy" || iconsProjects[item] ? '' : (
                                                        < picture key={item}>
                                                        <img  src={nameSkills[item]}></img>
                                                        </picture>
                                                    )
                                                )
                                            })
                                        }
                                    </footer>
                                </a>
                            )

                        })}


                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}