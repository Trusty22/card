import Twitter from "/Users/mandeepmasoun/Desktop/MyFolders/website/card/card/src/images/Twitter Icon.png"
import FB from "/Users/mandeepmasoun/Desktop/MyFolders/website/card/card/src/images/Facebook Icon.png"
import Insta from "/Users/mandeepmasoun/Desktop/MyFolders/website/card/card/src/images/Instagram Icon.png"
import Git from "/Users/mandeepmasoun/Desktop/MyFolders/website/card/card/src/images/GitHub Icon.png"


export default function Footer() {
    return (
        <>
            <ul>
                <li><img src={Twitter} alt="twitter icon" /></li>
                <li><img src={FB} alt=" fb icon" /></li>
                <li><img src={Insta} alt="insta icon" /></li>
                <li><img src={Git} alt="git icon" /></li>
            </ul>
        </>
    )
}