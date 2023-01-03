import {useGithubAutomatedRepos} from "../../../hooks/useGithubAutomatedRepos"





type Props = {
    iconItem: string
}
export default function IconSkill({ iconItem }: Props) {
    const { iconSkills, iconsProjects } = useGithubAutomatedRepos()
    return (
        iconItem == "deploy" || iconsProjects[iconItem as never] ? (<></>) : (

            <img src={iconSkills[iconItem as never]}></img>

        )
    )




}