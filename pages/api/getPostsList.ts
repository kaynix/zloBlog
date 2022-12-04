// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  title: string,
  content: string

}

export default function getPostsList(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([{ title: 'День из жизни идиота', content: 'Текст текст' }, { title: 'Афигенние истории', content: 'Афигенние истории Текст текст' }])
}
