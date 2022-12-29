import useGithubRepos from "../../../hooks/useReposGithub"





type Props = {
    iconItem: string
}
export default function IconProjects({ iconItem }: Props) {
    const { iconSkills, iconsProjects } = useGithubRepos()
    
    return (
        <></>
    )

}