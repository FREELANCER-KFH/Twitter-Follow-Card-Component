import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App (){

    return (
        <>
            <div className='container'>
                <TwitterFollowCard 
                    userName="programmerKFH" name="Kevin Feliz Henriquez"
                />
                <TwitterFollowCard 
                    userName="Benignomnez" name="Benigno Martinez"
                />
                <TwitterFollowCard 
                     userName="pancakecodes" name="Sabrina Hernandez"
                />
                <TwitterFollowCard 
                    userName="codebyeli" name="Hector Encarnacion"
                />
                <TwitterFollowCard 
                    userName="teresa08" name="Maria Teresa Soriano"
                />
            </div>
        </>
    )
}