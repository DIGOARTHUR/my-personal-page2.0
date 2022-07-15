import './styles.scss'

export function Bio() {

    return (
        <div className="bioContainer">
            <img className='avatarImg' src="https://user-images.githubusercontent.com/59892368/179098361-428d59d6-3bd9-4153-a690-11261119cd64.jpeg"></img>
            <section className="bioContent">
                <h1>About me</h1>
              <div className="descriptionBio">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </div>
            </section>
        </div>
    )
}