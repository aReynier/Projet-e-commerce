import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
return (
    <div>
        <div>
            <h2>Produit 1</h2>
            <p>Image</p>
            <p>Prix</p>
            <Link to="/product">Voir le produit</Link>
        </div>
    </div>
)
}

export default Home