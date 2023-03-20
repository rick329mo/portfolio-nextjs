import About from "../components/About"
import Navbar from "../components/Navbar"
import Main from "../components/Main"
import Head from "next/head"
import Skills from "@/components/Skills"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rick | Front-End Developer</title>
        <meta name="My portfolio website built in next" content="Generated by create next app"/>
        <link rel="icon" href="../public/assets/RM.png" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />


    </div>
  )
}
