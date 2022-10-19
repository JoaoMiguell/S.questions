import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../prisma/instance";
import { hashSync } from "bcrypt";

type ResData = {
  id: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResData>
): Promise<NextApiResponse<ResData> | undefined | void> {
  if (req.method === "POST") {
    var adminPassword: string = req.body;
    if (adminPassword.length < 8) return res.status(401);
    adminPassword = hashSync(adminPassword, Number(process.env.SALT));

    var idRoom: ResData = await prisma.room.create({
      data: {
        adminPassword: adminPassword,
        messages: [],
      },
      select: {
        id: true,
      },
    });
    return res.status(201).json(idRoom);
  } else {
    return res.status(100);
  }
}
