// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse, NextRequest } from 'next/server'
import prisma from '../../../utils/pclient';

export type PostData = {
  id: number,
  img_url: string,
  title: string,
  content: string,
  postedDate: string,
  author: string

}


export async function GET(
  req: NextRequest,
  params: any 
  // res: NextApiResponse<PostData[]>
){
  
  // let id = 5;
  // console.log(req.nextUrl);
  // console.log(parseInt(params.params.post));
  let id = parseInt(params.params.post)
    let post = await prisma.post.findUnique({where:{id}})
  /*database reqest here */
  return NextResponse.json(post)
}
