function Header(){
    return (
        <div className="header-container">
            <nav>

                <div>
                    <a href="/">HOME</a>
                </div>

                <div>
                    <a href="/apod">APOD</a>
                </div>

                <div>
                    <a href="/insight">INSIGHT</a>
                </div>

                <div>
                    <a href="/library">LIBRARY</a>
                </div>

                <div>
                    <a href="/tle">TLE</a>
                </div>

            </nav>
        
        {/* HEADER CONTAINER ENDS HERE  */}
        </div>
    )
}

function Footer(){
    return (
        <div className="footer-container">
            
            <p>This project was made by SammiDoesThings to practice API calls, experiment with displaying different types of data, and learning state management.</p>

            <p>Follow Sammi on <a href="https://www.github.com/sammidoesthings">GitHub</a>, or check out her other projects on <a href="https://www.github.com/sammidoesthings">SammiLand!</a></p>


        {/* FOOTER CONTAINER ENDS HERE  */}
        </div>
    )
}

export { Header, Footer}