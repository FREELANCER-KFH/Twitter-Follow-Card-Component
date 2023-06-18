import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App (){

    return (
        <>
            <div className='container'>
                <TwitterFollowCard 
                    isFollowing userName="programmerKFH" name="Kevin Feliz Henriquez"
                />
                <TwitterFollowCard 
                    isFollowing userName="Benignomnez" name="Benigno Martinez"
                />
                <TwitterFollowCard 
                    isFollowing userName="pancakecodes" name="Sabrina Hernandez"
                />
                <TwitterFollowCard 
                    isFollowing userName="codebyeli" name="Hector Encarnacion"
                />
                <TwitterFollowCard 
                    isFollowing userName="teresa08" name="Maria Teresa Soriano"
                />
            </div>
        </>
    )
}