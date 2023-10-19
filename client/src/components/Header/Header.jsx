import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
return (<div>
<Link to="/">Logo</Link>
<form>
    <input type="text" placeholder="Recherche"/>
</form>
<p>Panier</p>
<p>User icon</p>
</div>
)
}

export default Header