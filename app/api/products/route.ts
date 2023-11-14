// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dayjs from 'dayjs';
import { NextResponse, NextRequest } from 'next/server'

export type ProductData = {
  id: number,
  img_url: string,
  name: string,
  description: string,
  price: number,
  quantity: number

}

export const PROD_DATA_fromDb:ProductData[] = [
  { id:1, img_url: "/кабель.jpg", name: 'Провод ПВС 3х2,5 ГОСТ 10 м', description: 'Провод ПВС', price:300, quantity:12 },
  { id:2, img_url: "/кабель.jpg", name: 'Провод ПВС 3х2,5 ГОСТ 200 м', description: 'Провод ПВС', price:300, quantity:12 },
  { id:3, img_url: "/кабель.jpg", name: 'Провод ПВС 3х2,5 ГОСТ 300 м', description: 'Провод ПВС', price:300, quantity:12 },
  { id:4, img_url: "/кабель.jpg", name: 'Провод ПВС 3х2,5 ГОСТ 500 м', description: 'Провод ПВС', price:300, quantity:12 },
  { id:5, img_url: "/кабель.jpg", name: 'Провод ПВС 3х2,5 ГОСТ 600 м', description: 'Провод ПВС', price:300, quantity:12 },
  { id:6, img_url: "/кабель.jpg", name: 'Провод ПВС 3х2,5 ГОСТ 700 м', description: 'Провод ПВС', price:300, quantity:12 },
  { id:7, img_url: "/кабель.jpg", name: 'Провод ПВС 3х2,5 ГОСТ 800 м', description: 'Провод ПВС Провод ПВС Провод ПВС Провод ПВС Провод ПВС Провод ПВС текст1 Провод ПВС Провод ПВС Провод ПВС', price:300, quantity:12 },
  { id:8, img_url: "/кабель.jpg", name: 'Провод ПВС 3х2,5 ГОСТ 900 м', description: 'Провод ПВС', price:300, quantity:12 },
  { id:9, img_url: "/кабель.jpg", name: 'Провод ПВС 3х2,5 ГОСТ 900 м', description: 'Провод ПВС', price:300, quantity:12 },
  { id:10, img_url: "/кабель.jpg", name: 'Провод ПВС 3х2,5 ГОСТ 1000 м', description: 'Провод ПВС', price:300, quantity:12 },
  { id:11, img_url: "/кабель.jpg", name: 'Провод ПВС 3х2,5 ГОСТ 444 м', description: 'Провод ПВС', price:300, quantity:12 },
  { id:12, img_url: "/кабель.jpg", name: 'Провод ПВС 3х2,5 ГОСТ 555 м', description: 'Провод ПВС', price:300, quantity:12 },
  { id:13, img_url: "/кабель.jpg", name: 'Провод ПВС 3х2,5 ГОСТ 666 м', description: 'Провод ПВС', price:300, quantity:12 },
  { id:14, img_url: "/кабель.jpg", name: 'Провод ПВС 3х2,5 ГОСТ 777 м', description: 'Провод ПВС', price:300, quantity:12 },
  { id:15, img_url: "/кабель.jpg", name: 'Провод ПВС 3х2,5 ГОСТ 888 м', description: 'Провод ПВС', price:300, quantity:12 },
  { id:16, img_url: "/кабель.jpg", name: 'Провод ПВС 3х2,5 ГОСТ 999 м', description: 'Провод ПВС', price:300, quantity:12 },
  { id:17, img_url: "/кабель.jpg", name: 'Провод ПВС 3х2,5 ГОСТ 000 м', description: 'Провод ПВС', price:300, quantity:12 },
  { id:18, img_url: "/кабель.jpg", name: 'Провод ПВС 3х2,5 ГОСТ 4422 м', description: 'Провод ПВС', price:300, quantity:12 },
  { id:19, img_url: "/кабель.jpg", name: 'Провод ПВС 3х2,5 ГОСТ 124 м', description: 'Провод ПВС', price:300, quantity:12 },
  { id:20, img_url: "/кабель.jpg", name: 'Афигенние истории2', description: 'Афигенние истории Текст текст2', price:300, quantity:12 }
]


export async function GET(
  req: NextRequest,
  params: any 
  // res: NextApiResponse<PostData[]>
){
  
  let id = 5;
  console.log(params);
  console.log(parseInt(params.params.post));
    
  /*database reqest here */
  return NextResponse.json(PROD_DATA_fromDb.find(it=> it.id===parseInt(params.params.post)))
}
