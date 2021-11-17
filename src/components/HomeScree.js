import React,{useState} from "react"
import styled from "styled-components"
import firebase from "firebase"
import {app} from "../base"
import {NavLink} from "react-router-dom"


const HomeScreen = ({counter,setCounter})=>{
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [avatar, setAvatar] = useState("")

const pushData = async ()=>{
    app.firestore().collection("registration").add({
        name,
        email,
        password,
        avatar: name.charAt(0).toUpperCase(),
        counter,
    })
    setName("")
    setEmail("")
    setPassword("")

}

const MathRandomNum = ()=>{
   const num = Math.floor(Math.random()*6)
   setCounter(num)

}

// React.useEffect(()=>{
//     pushData()
// },[])

    return(
        <Container>
            <Wrapper>
                <Card>
                    <Register>Register an account</Register>
                    <NamInput>
                        <span>Full Name</span>
                        <input value={name}
                         placeholder="Please Enter your Fullname"
                         onChange={(e)=>{
                             setName(e.target.value)
                         }}/>
                    </NamInput>
                    <NamInput>
                        <span>Email</span>
                        <input type="email" placeholder="Please Enter your Email"
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                        onClick={()=>{
                           
                        }}
                        />
                    </NamInput>
                    <NamInput>
                        <span>Password</span>
                        <input type="password" placeholder="Please Enter your password"
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}/>
                    </NamInput>
                    <Submit onClick={()=>{
                        MathRandomNum()
                        pushData()
                    }} to="/view">
                        <span>Submit</span>
                    </Submit>
                </Card>
            </Wrapper>
        </Container>
    )
}

export default HomeScreen

const  Submit = styled(NavLink)`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;

span{
    text-align: center;
padding: 10px 20px;
background-color: darkblue;
color: white;
font-weight: bold;
font-size: 12px;
transform: scale(1);
transition: all 350ms;
cursor: pointer;
:hover{
    transform: scale(0.9);

}
}
`

const  Register = styled.div`
color: white;
font-size: 25px;
text-align: center;
margin: 30px 0;
text-transform: uppercase;
letter-spacing: 0.7px;

`

const  NamInput = styled.div`
display: flex;
flex-direction: column;
margin: 20px 0px;
`

const  Card = styled.div`
display: flex;
flex-direction: column;
span{
    color: white;
    font-size: 15px;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    margin: 7px 0px;
    font-weight: bold;
}
input{
    width: 260px;
    height: 30px;
    outline: none;
    background-color: none;
    
    
}
`
const  Wrapper = styled.div`
display:flex;
padding-top: 80px;

`
const  Container = styled.div`
width: 100%;
height: calc(100vh - 70px);
/* padding-top: 50px; */
background-color: rgb(0,0,255,0.8);
display: flex;
justify-content: center;
/* align-items: center; */
`
