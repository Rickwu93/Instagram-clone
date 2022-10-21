import instagramLogo from '../assets/instagram.png'

const Nav = () => {
    return (
        <nav>
            <button className="logo">
                <img src={instagramLogo} alt="logo" />
            </button>
        </nav>
    )
}

export default Nav