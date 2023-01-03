import {useGithubAutomatedRepos} from "../../../hooks/useGithubAutomatedRepos"

type Props = {
    iconItem: string
}
export function IconProjects({ iconItem }: Props) {
    const { iconSkills, iconsProjects } = useGithubAutomatedRepos()
    
    return (
        iconsProjects[iconItem as never] ? (<img src={iconsProjects[iconItem as never]}></img>) : (<></>)
    )

}