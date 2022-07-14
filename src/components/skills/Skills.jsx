import './styles.scss'
import { IoIosArrowDown } from "react-icons/io";
import skillsData from '../../data/skills_data.json'
export function Skills() {

    const style = { color: "white", fontSize: "1.5em" }

    return (
        <div className="skillsContainer">
            <h1>Main Stack</h1>

            <section className="typeSkillsContainer">
                <h5>Tools</h5>
                <div className="itemsContainer">
                    {
                        skillsData.Tools.map((item) => (
                            <div className="itemsContent">
                                <img className='codeBar' src={item.logo}></img>
                                <span>{item.name}</span>
                            </div>

                        ))

                    }
                </div>
            </section>

            <section className="typeSkillsContainer">
                <h5>Languages | Frameworks</h5>
                <div className="itemsContainer">
                    {
                        skillsData.LanguagesFrameworks.map(item => (
                            <div className="itemsContent">
                                <img className='codeBar' src={item.logo}></img>
                                <span>{item.name}</span>
                            </div>

                        ))
                    }


                </div>
            </section>


            <section className="typeSkillsContainer">

                <h5>Databases</h5>
                <div className="itemsContainer">

                    {
                        skillsData.Databases.map(item => (
                            <div className="itemsContent">
                            <img className='codeBar' src={item.logo}></img>
                            <span>{item.name}</span>
                        </div>
                        ))
                    }

                </div>
            </section>
            {/* 
            <footer>
             
                <button> Projetos  <IoIosArrowDown className="iconButton" style={{}}/></button>
            </footer>
            */}
        </div>
    )
}