import React,{useState,useEffect} from 'react'
import firebase from "firebase"
import {app} from "../base"

const Fire = () => {
const [data, setData] = useState([])

const getData = async ()=>{
    await app.firestore().collection("student")
    .onSnapshot((snapshot)=>{
        const store = []
        snapshot.forEach((doc)=>{
            store.push(doc.data())
        })
        setData(store)
    })
}

useEffect(()=>{
    getData()
    console.log(data)
},[])
    return (
        <div>
         {data?.map((props)=>(
             <div key={props.id}>{props.name}</div>
         ))}
        </div>
    )
}

export default Fire
