
import timelineElements from "./data";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import styles from './styles.module.scss'
export default function Timeline() {
    let workIconStyles = { background: "#183d33" }
    let schoolIconStyles = { background: "#f9c74f" }
   
    return (
        <div>
            <h1 className={styles.title}>Universidade</h1>
            <h5 className={styles.subTitle}>Monitorias, Projetos de Extensão, Pesquisas, Livro</h5>
            <h2 className={styles.titleTimeLine}>Timeline</h2>
            <VerticalTimeline>
                {
                    timelineElements.map((element) => {
                        let isWorkIcon = element.icon === "work"
                        let showButton =
                            element.buttonText !== undefined &&
                            element.buttonText !== null &&
                            element.buttonText !== ""

                        return (
                            <VerticalTimelineElement
                                key={element.title}
                                date={element.date}
                                dateClassName="date"
                                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                                className={styles.time}

                            >
                                <h3 className={styles.verticalTimelineElementTitle}>
                                    {element.title}
                                </h3>
                                <h5 className={styles.verticalTimelineElementSubtitle}>
                                    {element.location}
                                </h5>
                                {element.type==='Monitoria'|| element.type==='EmpresaJr'|| element.type==='Pesquisa'?<p>Linguagem: {element.language} </p>  :``}
                                <p className={styles.description}>{element.description}</p>
                                {element.type==='Monitoria'|| element.type==='EmpresaJr'|| element.type==='Extensao'?<p>Atividade: {element.activity} </p>  :``} 
                                {element.type==='Monitoria'||element.type==='Pesquisa'?<p>Orientador: {element.advisor} </p>  :``} 
                              
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </div>
    )
}