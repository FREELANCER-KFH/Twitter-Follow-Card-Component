import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App (){

    const users = [
        {
            userName: "programmerKFH",
            name: "Kevin Feliz Henriquez",
            isFollowing: false
        },
        {
            userName: "Benignomnez", 
            name: "Benigno Martinez",
            isFollowing: true
        },
        {
            userName: "pancakecodes",
            name: "Sabrina Hernandez",
            isFollowing: false
        },
        {
            userName: "codebyeli" ,
            name: "Hector Encarnacion",
            isFollowing: true
        },
        {
            userName: "teresa08",
            name: "Maria Teresa Soriano",
            isFollowing: false
        }
    ]

    return (
        <>
            <section className='container'>
                <h1>WHO TO FOLLOW</h1>
                {
                    users.map(({userName, name, isFollowing}) =>(
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            name={name}
                            initialIsFollowing={isFollowing}
                        >
                        </TwitterFollowCard>
                    ))
                }
            </section>
        </>
    )
}