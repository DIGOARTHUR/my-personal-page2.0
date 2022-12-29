import useGithubRepos from "../../../hooks/useReposGithub"





type Props = {
    iconItem: string
}
export default function IconSkill({ iconItem }: Props) {
    const { iconSkills, iconsProjects } = useGithubRepos()
    return (
        iconItem == "deploy" || iconsProjects[iconItem as never] ? (<></>) : (

            <img src={iconSkills[iconItem as never]}></img>

        )
    )




}