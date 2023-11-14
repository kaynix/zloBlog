// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse, NextRequest } from 'next/server'

export type OrdersData = {
  id: number,
  prod_id: number,
  category: number,
  quantity: number,
  quantity_tag: number,

}

export const PROD_DATA_fromDb:OrdersData[] = [
  { id:1, prod_id: 3, category: 1, quantity:1, quantity_tag: 1 },
  { id:2, prod_id: 5, category: 1, quantity:1, quantity_tag: 1  },
  { id:3, prod_id: 12, category: 1, quantity:3, quantity_tag: 1  },
  { id:4, prod_id: 2, category: 1, quantity:7, quantity_tag: 1  },
  { id:5, prod_id: 20, category: 1, quantity:12, quantity_tag: 1  }
]


export async function GET(
  req: NextRequest,
  params: any 
  // res: NextApiResponse<PostData[]>
){
  
  // let id = 5;
  // // console.log(req.nextUrl);
  // console.log(parseInt(params.params.post));
    
  /*database reqest here */
  return NextResponse.json(PROD_DATA_fromDb)
}
