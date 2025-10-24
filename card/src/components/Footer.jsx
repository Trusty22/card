import Twitter from "/Users/mandeepmasoun/Desktop/MyFolders/website/card/card/src/images/Twitter Icon.png"
import FB from "/Users/mandeepmasoun/Desktop/MyFolders/website/card/card/src/images/Facebook Icon.png"
import Insta from "/Users/mandeepmasoun/Desktop/MyFolders/website/card/card/src/images/Instagram Icon.png"
import Git from "/Users/mandeepmasoun/Desktop/MyFolders/website/card/card/src/images/GitHub Icon.png"


export default function Footer() {
    return (
        <footer>
            <ul className="links">
                <li><a href="https://x.com"><img src={Twitter} alt="twitter icon" /></a></li>
                <li><a href="https://facebook.com"><img src={FB} alt=" fb icon" /></a></li>
                <li><a href="https://instagram.com"><img src={Insta} alt="insta icon" /></a></li>
                <li><a href="https://github.com/Trusty22"><img src={Git} alt="git icon" /></a></li>
            </ul>
        </footer>
    )
}