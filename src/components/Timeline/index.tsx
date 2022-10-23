
import timelineElements from "./data";
import { FaUniversity } from 'react-icons/fa';
import { GiMagnifyingGlass, GiTeacher, GiWhiteBook } from 'react-icons/gi';
import { BiExtension } from 'react-icons/bi';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import styles from './styles.module.scss'
export default function Timeline() {


    let monitoriaIconStyles = { background: "#f1ae2b" }
    let formacaoIconStyles = { background: "#bc0b27" }
    let pesquisaIconStyles = { background: "#f4ddb4" }
    let projetoIconStyles = { background: "#72bca5" }
    let bookIconStyles = { background: "#4a2512" }
    return (
        <div className={styles.timelineContainer}>
            <h1 className={styles.title}>Universidade</h1>
            <h5 className={styles.subTitle}>Monitorias, Projetos de Extensão, Pesquisas, Livro</h5>
            {timelineElements.map((element)=>{
               
            })}
            <h2 className={styles.titleTimeLine}>Timeline</h2>
            <VerticalTimeline>
                {
                    timelineElements.map((element) => {




                        let showButton =
                            element.buttonText !== undefined &&
                            element.buttonText !== null &&
                            element.buttonText !== ""

                        return (
                            <VerticalTimelineElement
                                key={element.title}
                                date={element.date}
                                dateClassName="date"
                                iconStyle={
                                    element.type === 'Formacao' ? formacaoIconStyles
                                        :
                                        element.type === 'Pesquisa' ? pesquisaIconStyles
                                            :
                                            element.type === 'Monitoria' ? monitoriaIconStyles
                                                :
                                                element.type === 'Projeto' ? projetoIconStyles
                                                    :
                                                    element.type === 'Livro' ? bookIconStyles
                                                        :
                                                        projetoIconStyles
                                            }
                                icon={
                                    element.type === 'Formacao' ? <FaUniversity className={styles.icon} />
                                        :
                                        element.type === 'Pesquisa' ? <GiMagnifyingGlass className={styles.icon} />
                                            :
                                            element.type === 'Monitoria' ? <GiTeacher className={styles.icon} />
                                                :
                                                element.type === 'Projeto' ? <BiExtension className={styles.icon} />
                                                    :
                                                    element.type === 'Livro' ? <GiWhiteBook className={styles.icon} />
                                                        :
                                                        ''
                                }
                                className={styles.time}

                            >
                                <h3 className={styles.verticalTimelineElementTitle}>
                                    {element.title}
                                </h3>
                                <h5 className={styles.verticalTimelineElementSubtitle}>
                                    {element.location}
                                </h5>
                                {element.type === 'Monitoria' || element.type === 'Projeto' ? <p>Linguagem: {element.language} </p> : ``}
                                <p className={styles.description}>{element.description}</p>
                                {element.type === 'Monitoria' || element.type === 'Projeto' ? <p>Atividade: {element.activity} </p> : ``}
                                {element.type === 'Monitoria' || element.type === 'Projeto' ? <p>Orientador: {element.advisor} </p> : ``}

                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </div >
    )
}