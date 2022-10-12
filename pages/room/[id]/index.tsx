import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from 'next/router'
import { useState } from "react";

import Logo from "../../../public/Icon.svg"
import ShareIcon from "../../../public/share.svg"
import UserIcon from "../../../public/users.svg"
import LockIcon from "../../../public/lock_black.svg"
import NoMessagesimage from "../../../public/Null_message.png"
import Link from "next/link";

const Room: NextPage = () => {
  var [messages, setMessages] = useState(null)

  const router = useRouter()
  const id = router.query.id as string
  return (
    <div className="bg-slate-800 h-[100vh] text-white">
      <div className=" mx-[10%] max-w-[90%]">
        <header className="flex items-center justify-between ">
          <Link href={"/"} >
            <Image src={Logo} alt="logo" className="mt-2 cursor-pointer"/>
          </Link>
          <div className="flex">
            <button className="border-2 border-blue-500 p-3 rounded-md flex items-center mt-2 mr-2">
              <p className="mr-2 text-blue-500">#{id}</p> 
              <Image src={ShareIcon} alt="compartilhar" />  
            </button>
            <button className="border-2 border-blue-500 bg-blue-500 p-3 rounded-md flex items-center mt-2">
              <Image src={UserIcon} alt="compartilhar" />
              <p className="ml-2 text-white">Criar sala</p>
            </button>
          </div>
        </header>
        <main className="mt-16">
          <h1 className="text-3xl font-bold mb-6">Faça sua pergunta</h1>
          <div className="flex flex-col w-full border-blue-500 border-2">
            <textarea className="w-full bg-slate-800 p-4" rows={2} placeholder="o que voce quer perguntar"/>
            <div className="p-4 flex justify-between">
              <p className="flex items-center text-xs">
                <Image src={LockIcon} alt="seguro"/>
                Esta pergunta é anônima
              </p>
              <button className="border-2 border-blue-500 bg-blue-500 py-2 px-6 rounded-md">Enviar</button>
            </div>
          </div>
          <div id="messages" className="flex items-center justify-around flex-col mt-14">
            {messages == null ? <Image src={NoMessagesimage} alt="Não há mensagens" className="ml-auto"/> : <p>ok</p>}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Room