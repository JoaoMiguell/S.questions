import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import Logo from "../../public/Icon.svg"
import ShareIcon from "../../public/share.svg"
import UserIcon from "../../public/users.svg"
import LockIcon from "../../public/lock_black.svg"
import NoMessagesimage from "../../public/Null_message.png"
import CardMessage from "../../components/CardMessage";

const Room: NextPage = () => {
  var [messages, setMessages] = useState<string[]>([])
  const router = useRouter()
  const {id} = router.query

  useEffect(() => {
    var url = window.location.href
    var urlSplited = url.split("/")
    console.log(urlSplited[4]);

    fetch(`/api/messages/${urlSplited[4]}`)
    .then(response => response.json())
    .then(data => {
      setMessages(data)
    })
  },[])

  function GetData() {
    
  }
  
  function sendMessage() {
    var newMessage: string|undefined = document.querySelector("textarea")?.value
    if (newMessage == undefined) return;
    if (newMessage.length < 8 || newMessage.length > 200) return;
    var data = { id, newMessage }
    setMessages([newMessage, ...messages])
    
    fetch("/api/create_message", {
      method: "PATCH",
      body: JSON.stringify(data)
    }).catch(err => {
      return <small>Erro interno...</small>
    })
  }

  function copyClipboard() {
    navigator.clipboard.writeText(`${window.location.href}`)
  }
  return (
    <div className="bg-slate-800 h-full text-white">
      <div className=" mx-[10%] h-[100%] max-w-[90%]">
        <header className="flex items-center justify-between ">
          <Link href={"/"} >
            <Image src={Logo} alt="logo" className="mt-2 cursor-pointer"/>
          </Link>
          <div className="flex">
            <button className="border-2 border-blue-500 p-3 rounded-md flex items-center mt-2 mr-2" onClick={copyClipboard}>
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
              <button className="border-2 border-blue-500 bg-blue-500 py-2 px-6 rounded-md" onClick={sendMessage}>Enviar</button>
            </div>
          </div>
          <div id="messages" className="flex items-center justify-around flex-col mt-14">
          {
            messages[0] == undefined 
            ? <Image src={NoMessagesimage} alt="Não há mensagens" className="ml-auto"/>
            : messages.map((message, index) => {
              return <CardMessage message={message} key={index}/>
            })
          }
          </div>
        </main>
      </div>
    </div>
  )
}

export default Room