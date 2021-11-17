import React from "react"
import styled from "styled-components"
import {app} from "../base"


const View = ()=>{

    const [data, setData] = React.useState([])

    const getData = async ()=>{
        await app.firestore().collection("registration")
        .onSnapshot((snapshot)=>{
            const store = []
            snapshot.forEach((doc)=>{
                store.push(doc.data())
            })
            setData(store)
        })
    }

    React.useEffect(()=>{
        getData()
        console.log(data)
    },[])
    return(
        <Container>
            <Wrapper>
                <CardHolder>
                   {data?.map((props)=>(
                        <Card key={props.id}> 
                        <Image bg={props.counter}>{props.avatar}</Image>
                        <Name>{props.name}</Name>
                        <Email>{props.email}</Email>
                    </Card>
                   ))}
                </CardHolder>
            </Wrapper>
        </Container>
    )
}
export default View

const Email = styled.div`
font-size: 12px;
color: blue;
`
const Name = styled.div`
font-size: 15px;
margin-bottom: 5px;
margin-top: -5px;
`

const Image = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
background-color: ${({bg})=>(bg===0? "blue":bg===1? "red" : bg===2? "green": bg===3? "darkblue" : bg===4? "navy" : "tomato")};
display: flex;
justify-content: center;
align-items: center;
color: white;
margin: 15px;
 font-size: 20px;
font-weight: bold; 
`
const Card = styled.div`
width: 250px;
height: 150px;
border-radius: 25px;
box-shadow: 3px 3px 3px lightgray;
display: flex;
align-items: center;
flex-direction:column;
margin: 0 20px;
transform: scale(1);
transition: all 350ms;
:hover{
transform: scale(1.03);
box-shadow: 3px 3px 4px lightgray;
}
`

const CardHolder = styled.div`
display: flex;
flex-wrap: wrap;
`
const Container = styled.div`
width: 100%;
height: calc(100vh - 70px);
display: flex;
justify-content: center; 
`

const Wrapper = styled.div`
width: 95%;
display: flex;
padding-top: 50px;
`