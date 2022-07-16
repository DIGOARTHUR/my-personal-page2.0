import './styles.scss'

export function Bio() {

    return (
        <div className="bioContainer">
            <img className='avatarImg' src="https://user-images.githubusercontent.com/59892368/179098361-428d59d6-3bd9-4153-a690-11261119cd64.jpeg"></img>
            <section className="bioContent">
                <h1>About me</h1>
              <div className="descriptionBio">
                <p>"Sou natural de Maceió/AL, mas passei grande parte da vida em Brasília/DF e na cidade onde me formei, Ouro Branco/MG. Possuo graduação em Bel. Interdisciplinar em Ciência e Tecnologia pela Universidade Federal de São João Del-Rei(2019), dentro da área de Engenharia Mecatrônica. Participo de pesquisa na área: Estatística Computacional e de Software. Atuo como Desenvolvedor de Software, e estou me especializando em ReactJS e  NodeJS pela Rocketseat(2022)."</p>
              </div>
            </section>
        </div>
    )
}