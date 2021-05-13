import React from 'react'
import Checkout_ITEM from "./CheckoutItem"
import {Input} from "antd"
import axios from "axios"
import putNotification from "./Notification"
import Particles from 'react-particles-js'
import ParticleComponent from './ParticleComponent'

const LandingPage = () => {
  const [email, setEmail] = React.useState("")

  const send = async () => {
      try {
        putNotification("Subscribing...")
        const resp = await axios.post("https://localhost:8443/api/v1/newsletter", {email:email})

        if (resp.status===200){
          putNotification(resp.data)
          setEmail("")
        }
      } catch (error) {
        putNotification("!!Error!!", error.response?.data?.message)
      }


  }
    return (
      <>
      <ParticleComponent />
<div class="jumbotron" style={{minHeight:"100vh"}}>
  <h1 class="display-3" style={{textAlign:"center"}}>Sushi Store</h1>
  <p class="lead" style={{textAlign:"center", paddingTop:0}}>One Stop gateway for your fashion ecstasy</p>
  <h1 class="display-4">Hello, Fashionistas ! Welcome</h1>
  
  <hr class="my-4" />
  {/* <Checkout_ITEM /> */}
 
  <p class="lead">
    <a class="ant-btn ant-btn-primary ant-btn-lg" style={{borderRadius:20 , placeItems: "center" }} href="/store" >Explore The Store</a>
  </p>
</div>
</>
    )
}

export default LandingPage
