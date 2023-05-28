import React from 'react'

export default function MovieCard() {
    return (
        <ListContainer>
            {filmes.map((filme) => (
                <MovieContainer key={filme.id}>
                    <img src={filme.posterURL} alt={filme.title}/>
                </MovieContainer>   
            ))}
            
            {/* <ListContainer>
                {filmes.map((filme) => (
                    <MovieContainer key={filme.id}>
                        {filmes ? (<img src={filme.posterURL} alt={filme.title}/>) : ("Carregando filmes...")}
                    </MovieContainer>   
                ))}
            </ListContainer> */}

        </ListContainer>
    )
}

const ListContainer = styled.div`
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`
const MovieContainer = styled.div`
    width: 145px;
    height: 210px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    img {
        width: 130px;
        height: 190px;
    }
`
