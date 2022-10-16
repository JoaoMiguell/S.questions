import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/instance"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<NextApiResponse<any> | undefined | void> {
  const id = <string| undefined>req.query.id
  if (id == "undefined") return res.status(400)

  var [result] = await prisma.room.findMany({
    where: {id: id}
  })

  return res.status(200).json(result.messages)
}