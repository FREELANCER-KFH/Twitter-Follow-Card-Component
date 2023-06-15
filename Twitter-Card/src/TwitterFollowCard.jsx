export function TwitterFollowCard({userName, name, isFollowing}){
    return (
        <article>
            <header>
                <img src = {`https://unavatar.io/github/${userName}`} alt="el avatar de usuario" />
                <div>
                    <strong>{name}</strong>
                    <span>@{userName}</span>
                </div>            
            </header>

            <aside>
                <button>Seguir</button>
            </aside>
        </article>
    )
}