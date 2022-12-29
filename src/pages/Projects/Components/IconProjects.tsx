import useGithubRepos from "../../../hooks/useReposGithub"



const { iconSkills,iconsProjects } = useGithubRepos()

type Props = {
    iconItem:string
}
export default function IconProjects( {iconItem }: Props) {

    return (

        iconItem  == "deploy" || iconsProjects[iconItem as never] ?  (<></>) : (

            <img src={iconSkills[iconItem as never]}></img>


        )



    )

}