
/* eslint-disable @next/next/no-img-element */
import { Footer } from '../../components/Footer'
import Image from 'next/image'
import { Header } from '../../components/Header'
import styles from './styles.module.scss'
import { useEffect, useState } from 'react'

import {useGithubAutomatedRepos} from '../../hooks/useGithubAutomatedRepos'
import IconSkill from './Components/IconSkill'
import IconProjects from './Components/IconProjects'
export default function Projects() {

    const { dataReposGithub} = useGithubAutomatedRepos()


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
            .then(data => setProjects(dataReposGithub(data, 'deploy')))
    }, [])

    return (
        <div className={styles.projects_Container}>
            <Header />

            <main className={styles.main_Container}>
                <div className={styles.main_Content}>
                    <h1>Projetos desenvolvidos</h1>
                    <p>Essa página lista os <strong>{projects.length}</strong> principais projetos que venho desenvolvendo durante a minha jornada como programador.</p>

                    <div className={styles.card_Container}>
                        {projects.map((element) => {
                            return (
                                <a key={element.id} href={element.html_url} className={styles.card}>
                                    {
                                        element.topics.map((item) => {
                                            return (
                                                < picture style={{filter: 'brightness(0) saturate(100%) invert(100%) sepia(5%) saturate(0%) hue-rotate(301deg) brightness(105%) contrast(106%)'}} key={item}>
                                                <IconProjects iconItem={item}/>
                                                </picture>
                                            )
                                        })
                                    }
                                    <h2>{element.name}</h2>
                                    <p>{element.description}</p>
                                    <footer className={styles.card_Footer}>
                                        {
                                            element.topics.map((item) => {
                                                return (
                                                    < picture key={item}>
                                                        <IconSkill iconItem={item} />
                                                    </picture>
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