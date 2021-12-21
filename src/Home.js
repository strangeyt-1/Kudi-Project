import React from 'react'
import Navbar from './Navbar'
import Content from './Content'
import Section1 from './Section1'
import Section2 from './Section2'
import Our from './Our'
import Live from './Live'
import Lastone from './Lastone'
import Flow from './Flow'
const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Content></Content>
            <Section1></Section1>
            <Section2></Section2>
            <Our></Our>
            <Live></Live>
            <Lastone></Lastone>
            <Flow></Flow>
        </div>
    )
}

export default Home
