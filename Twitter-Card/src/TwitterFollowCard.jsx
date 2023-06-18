export function TwitterFollowCard({userName, name, isFollowing}){
    const text = isFollowing 
        ? 'Siguiendo' 
        : 'Seguir'
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following' 
        : 'tw-followCard-button'

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" src = {`https://unavatar.io/github/${userName}`} alt="el avatar de usuario" />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>            
            </header>

            <aside>
                <button className={buttonClassName}>Seguir</button>
            </aside>
        </article>
    )
}