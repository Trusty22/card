import Email from "/Users/mandeepmasoun/Desktop/MyFolders/website/card/card/src/images/Mail.png"
import Linkedin from "/Users/mandeepmasoun/Desktop/MyFolders/website/card/card/src/images/linkedin.png"

export default function Info() {
    return (
        <>

            <div className="interactables">
                <button><img src={Email} />Email</button>
                <button><img src={Linkedin} />LinkedIn</button>
            </div>
            <div className="content">
                <h1>About</h1>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>
        </>
    )
}