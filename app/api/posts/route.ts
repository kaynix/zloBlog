// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

type Data = {
  id: number,
  title: string,
  content: string,
  posted: string,
  author: string

}

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
){

  /*database reqest here */
  return NextResponse.json([
    { id:1, title: 'День из жизни патриота1', content: 'Текст текст1' },
    { id:2, title: 'День из жизни патриота1', content: 'Текст текст1' },
    { id:3, title: 'День из жизни патриота1', content: 'Текст текст1' },
    { id:4, title: 'День из жизни патриота1', content: 'Текст текст1' },
    { id:5, title: 'День из жизни патриота1', content: 'Текст текст1' },
    { id:6, title: 'День из жизни патриота1', content: 'Текст текст1' },
    { id:7, title: 'День из жизни патриота31', content: 'Текст текст1 Текст текст1 Текст текст1 Текст текст1 Текст текст1 Текст текст1 текст1 Текст текст1 Текст текст1 Текст текст1' },
    { id:8, title: 'День из жизни патриота1', content: 'Текст текст1' },
    { id:9, title: 'День из жизни патриота1', content: 'Текст текст1' },
    { id:10, title: 'День из жизни патриота1', content: 'Текст текст1' },
    { id:11, title: 'День из жизни патриота1', content: 'Текст текст1' },
    { id:12, title: 'День из жизни патриота1', content: 'Текст текст1' },
    { id:13, title: 'День из жизни патриота1', content: 'Текст текст1' },
    { id:14, title: 'День из жизни патриота1', content: 'Текст текст1' },
    { id:15, title: 'День из жизни патриота1', content: 'Текст текст1' },
    { id:16, title: 'День из жизни патриота1', content: 'Текст текст1' },
    { id:17, title: 'День из жизни патриота1', content: 'Текст текст1' },
    { id:18, title: 'День из жизни патриота1', content: 'Текст текст1' },
    { id:19, title: 'День из жизни патриота1', content: 'Текст текст1' },
    { id:20, title: 'Афигенние истории2', content: 'Афигенние истории Текст текст2' }
  ])
}
