import "./productCard.css"

const MyProductCard = () => {
    return (
        <>
        <main>
        <fieldset>
            <figure>
                <img src="./src/images/ram.jpg" alt="Random Acces Memories Album Cover Art"/>
            </figure>
            <section className="right">
                <h3>RANDOM ACCESS MEMORIES DIGITAL ALBUM</h3>
                <p>Price: €18.99</p>
                <p className="second-paragraph">
                    2023 marks the 10th anniversary of Daft Punk multi Grammy winning hit record Random Access Memories including Get Lucky, Instant Crush, Lose Yourself To Dance and featuring Pharrell Williams, Nile Rodgers, 
                    Julian Casablancas, Paul Williams, Panda Bear and Todd Edwards. To celebrate this milestone a special expanded edition will be released including 35 minutes of unreleased music (Demo and Studio Outtakes). 
                </p>
                <button type="submit">Add to your shopping bag</button>
                
            </section>
        </fieldset>
    </main>
        </>
    )
}

export default MyProductCard