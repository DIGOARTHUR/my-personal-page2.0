
/* eslint-disable @next/next/no-img-element */
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import Timeline from '../../components/Timeline'
import styles from './styles.module.scss'
import { useEffect, useState } from 'react'
import nameSkill from '../../utils/nameSkills'
export default function Projects() {

    interface Provider {
        name: string;
        topics:[];
        html_url:string;
        description:string;
        
      }
  
    const [projects, setProjects] = useState<Provider[]>([])

    useEffect(() => {
        fetch('https://api.github.com/users/digoarthur/repos')
            .then(response => response.json())
            .then(data => setProjects(data.filter((item:Provider)=>{
                return item.topics.includes('deploy')
               })))
    }, [])
    return (

        <div className={styles.university_Container}>
            <Header />

            <main className={styles.main_Container}>
                <div className={styles.main_Content}>
                    <h1>Projetos desevolvidos</h1>
                    <p>Essa página lista os {projects.length} principais projetos que venho desenvolvendo durante a minha jornada como programador.</p>

                    <div className={styles.card_Container}>
                        {projects.map((element) => {
                            return (
                                <a href={element.html_url} className={styles.card}>
                                       {
                                        element.topics.map((item)=>{
                                            return (
                                                item=="javascript"?( <img src={nameSkill[item]}></img>):''
                                            )
                                        })
                                    }
                                    <h2>{element.name}</h2>
                                    <p>{element.description}</p>
                                    <footer className={styles.card_Footer}>
                                    {
                                        element.topics.map((item)=>{
                                            return (
                                                item=="deploy"?'':(
                                                <img src={nameSkill[item]}></img>
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