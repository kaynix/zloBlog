// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'
import prisma from '../../utils/pclient';
import { PostData } from '../post/[post]/route'

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse<PostData[]>
){

  // let data = [
  //   { id:1, img_url: "/fr_jacket.webp", title: 'День из жизни патриота1', content: 'Текст текст1', postedDate:dayjs().toDate(), author:"Konstantin" },
  //   { id:2, img_url: "/fr_jacket.webp", title: 'День из жизни патриота1', content: 'Текст текст1', postedDate:dayjs().toDate(), author:"Konstantin" },
  //   { id:3, img_url: "/fr_jacket.webp", title: 'День из жизни патриота1', content: 'Текст текст1', postedDate:dayjs().toDate(), author:"Konstantin" },
  //   { id:4, img_url: "/fr_jacket.webp", title: 'День из жизни патриота1', content: 'Текст текст1', postedDate:dayjs().toDate(), author:"Konstantin" },
  //   { id:5, img_url: "/fr_jacket.webp", title: 'День из жизни патриота1', content: 'Текст текст1', postedDate:dayjs().toDate(), author:"Konstantin" },
  //   { id:6, img_url: "/fr_jacket.webp", title: 'День из жизни патриота1', content: 'Текст текст1', postedDate:dayjs().toDate(), author:"Konstantin" },
  //   { id:7, img_url: "/fr_jacket.webp", title: 'День из жизни патриота31', content: 'Текст текст1 Текст текст1 Текст текст1 Текст текст1 Текст текст1 Текст текст1 текст1 Текст текст1 Текст текст1 Текст текст1', postedDate:dayjs().toDate(), author:"Konstantin" },
  //   { id:8, img_url: "/fr_jacket.webp", title: 'День из жизни патриота1', content: 'Текст текст1', postedDate:dayjs().toDate(), author:"Konstantin" },
  //   { id:9, img_url: "/fr_jacket.webp", title: 'День из жизни патриота1', content: 'Текст текст1', postedDate:dayjs().toDate(), author:"Konstantin" },
  //   { id:10, img_url: "/fr_jacket.webp", title: 'День из жизни патриота1', content: 'Текст текст1', postedDate:dayjs().toDate(), author:"Konstantin" },
  //   { id:11, img_url: "/fr_jacket.webp", title: 'День из жизни патриота1', content: 'Текст текст1', postedDate:dayjs().toDate(), author:"Konstantin" },
  //   { id:12, img_url: "/fr_jacket.webp", title: 'День из жизни патриота1', content: 'Текст текст1', postedDate:dayjs().toDate(), author:"Konstantin" },
  //   { id:13, img_url: "/fr_jacket.webp", title: 'День из жизни патриота1', content: 'Текст текст1', postedDate:dayjs().toDate(), author:"Konstantin" },
  //   { id:14, img_url: "/fr_jacket.webp", title: 'День из жизни патриота1', content: 'Текст текст1', postedDate:dayjs().toDate(), author:"Konstantin" },
  //   { id:15, img_url: "/fr_jacket.webp", title: 'День из жизни патриота1', content: 'Текст текст1', postedDate:dayjs().toDate(), author:"Konstantin" },
  //   { id:16, img_url: "/fr_jacket.webp", title: 'День из жизни патриота1', content: 'Текст текст1', postedDate:dayjs().toDate(), author:"Konstantin" },
  //   { id:17, img_url: "/fr_jacket.webp", title: 'День из жизни патриота1', content: 'Текст текст1', postedDate:dayjs().toDate(), author:"Konstantin" },
  //   { id:18, img_url: "/fr_jacket.webp", title: 'День из жизни патриота1', content: 'Текст текст1', postedDate:dayjs().toDate(), author:"Konstantin" },
  //   { id:19, img_url: "/fr_jacket.webp", title: 'День из жизни патриота1', content: 'Текст текст1', postedDate:dayjs().toDate(), author:"Konstantin" },
  //   { id:20, img_url: "/fr_jacket.webp", title: 'Афигенние истории2', content: 'Афигенние истории Текст текст2', postedDate:dayjs().toDate(), author:"Konstantin" }
  // ]
  /*database reqest here */
  let rez = await prisma.post.findMany().catch(e=> console.log(e));
  // console.log("POSTS >>>",rez);
  
  return NextResponse.json(rez)
}
