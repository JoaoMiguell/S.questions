import { useRouter } from "next/router";

export default function FormLogin() {
  const router = useRouter()

  function enterRoom() {
    var roomId: string | undefined = document.querySelector("input")?.value;

    if (roomId == undefined) return;

    router.push(`/room/${roomId}`)
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold text-white">Entre como participante</h1>
      <input className="mt-6 mb-3 h-12 rounded p-3" type="text" placeholder="Código da sala"/>
      <button className="bg-blue-500 h-12 rounded text-white" onClick={enterRoom}>Entrar na sala</button>
    </div>
  )
}