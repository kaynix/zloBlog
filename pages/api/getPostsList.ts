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
  res.status(200).json([
    { title: 'title1 - День из жизни идиота', content: 'content1 - Текст текст' },
    { title: 'title2 - Афигенние истории', content: 'content2 - Афигенние истории Текст текст' }
  ])
}
