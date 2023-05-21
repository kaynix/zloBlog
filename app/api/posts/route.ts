// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

type Data = {
  title: string,
  content: string,
  posted: string,
  author: string

}

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
){
  return NextResponse.json([
    { title: 'День из жизни патриота1', content: 'Текст текст1' },
    { title: 'День из жизни патриота1', content: 'Текст текст1' },
    { title: 'День из жизни патриота1', content: 'Текст текст1' },
    { title: 'День из жизни патриота1', content: 'Текст текст1' },
    { title: 'День из жизни патриота1', content: 'Текст текст1' },
    { title: 'День из жизни патриота1', content: 'Текст текст1' },
    { title: 'День из жизни патриота31', content: 'Текст текст1 Текст текст1 Текст текст1 Текст текст1 Текст текст1 Текст текст1 текст1 Текст текст1 Текст текст1 Текст текст1' },
    { title: 'День из жизни патриота1', content: 'Текст текст1' },
    { title: 'День из жизни патриота1', content: 'Текст текст1' },
    { title: 'День из жизни патриота1', content: 'Текст текст1' },
    { title: 'День из жизни патриота1', content: 'Текст текст1' },
    { title: 'День из жизни патриота1', content: 'Текст текст1' },
    { title: 'День из жизни патриота1', content: 'Текст текст1' },
    { title: 'День из жизни патриота1', content: 'Текст текст1' },
    { title: 'День из жизни патриота1', content: 'Текст текст1' },
    { title: 'День из жизни патриота1', content: 'Текст текст1' },
    { title: 'День из жизни патриота1', content: 'Текст текст1' },
    { title: 'День из жизни патриота1', content: 'Текст текст1' },
    { title: 'День из жизни патриота1', content: 'Текст текст1' },
    { title: 'Афигенние истории2', content: 'Афигенние истории Текст текст2' }
  ])
}
