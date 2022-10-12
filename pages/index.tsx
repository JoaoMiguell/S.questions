import type { NextPage } from 'next'
import { useState } from 'react'
import Image from 'next/image'

import ImageBack from "../public/Ilustração.svg"
import FormCreate from '../components/FormCreate'
import FormLogin from '../components/FormLogin'

const Home: NextPage = () => {
  var [isLogin, setIsLogin] = useState(true)

  function changeState() {
    setIsLogin(!isLogin)
  }

  return (
    <div className="App flex justify-between items-center bg-blue-900" id='principal'>
      <div className='hidden sm:block'>
        <Image src={ImageBack} alt="Background Image"/>
      </div>
      <div className="ml-[5%] max-w-[90%] md:max-w-sm md:ml-0 md:mr-10 2xl:mr-60 flex flex-col">
        { isLogin? <FormLogin /> : <FormCreate /> }
        <div className="flex items-center text-center my-10">
          <hr className="w-1/2"/>
          <small className="text-gray-50 mx-1">ou</small>
          <hr className="w-1/2"/>
        </div>
        { 
          isLogin? <h1 className="text-3xl font-bold text-white mb-6">Crie sua própria sala, de forma fácil</h1>
          : <h1 className="text-3xl font-bold text-white mb-6">Entre em uma sala, e converse agora mesmo!</h1> 
        }
        <h1 className="text-3xl font-bold text-white mb-6"></h1>
        <button className="border-2 border-blue-500 h-12 rounded text-white" onClick={changeState}>
          {isLogin ? "Criar sala" : "Entrar na sala"}
        </button>
      </div>
    </div>
  )
}

export default Home
