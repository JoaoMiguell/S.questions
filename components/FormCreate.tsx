import {useRouter} from "next/router";


export default function FormCreate() {
  const router = useRouter()

  function createRoom() {
    var passwordRoom: string | undefined = document.querySelector("input")?.value;
    
    if (passwordRoom == undefined) return;
    fetch("/api/create_room", {
      method: "POST",
      body: passwordRoom,
    })
    .then((response) => response.json())
    .then((data) => {
      router.push(`/room/${data.id}`)
    });
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold text-white">Crie sua própria sala</h1>
      <input
        className="mt-6 mb-3 h-12 rounded p-3"
        type="password"
        placeholder="Insira uma senha"
      />
      <button
        className="bg-blue-500 h-12 rounded text-white"
        onClick={createRoom}
      >
        Criar uma sala
      </button>
    </div>
  );
}
