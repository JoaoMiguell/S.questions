import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../prisma/instance"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  var data = req.body
  data = JSON.parse(data)

  var roomData = await prisma.room.findUnique({
    where: {id: data.id}
  })
  
  if (roomData == null || roomData == undefined) return res.status(400)

  await prisma.room.update({
    data: {messages: [...roomData.messages, data.newMessage]},
    where: {id: data.id},
    select: {messages: true}
  })
  
  return res.status(201)
}