import React from "react"
import styled from "styled-components"

const Home = ()=>{
    return(
        <Container>
            <Wrapper>
                <Welcome>Welcome to Udeme Kitchen</Welcome>
            </Wrapper>
        </Container>
    )
}

export default Home

const Container = styled.div`
width: 100%;
height: calc(100vh - 70px);
display: flex;
justify-content: center;
align-items: center;
`
const Wrapper = styled.div``
const Welcome = styled.div`
font-size: 45px;
/* width: 400px; */
color: blue;
text-align: center;
font-weight: bold;
`