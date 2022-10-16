import Image from "next/image"

import AvatarIcon from "../public/Avatar.svg"

type Props = {
  message: string
}

export default function CardMessage(props: Props) {
  return (
    <div className="bg-slate-700 w-full h-32 rounded p-6 mb-3">
      <div className="flex items-center">
        <Image src={AvatarIcon} alt="icone Avatar"/>
        <p className="ml-2">{props.message}</p>
      </div>
    </div>
  )
}