import { use } from "react";
import { OrdersData } from "../../api/orders/route";
import { ProductData } from "../../api/products/route";

async function getOrders() {
  let res =  await fetch("http://localhost:3000/api/orders");
  
  return res.json();
}
async function getProds() {
  let res =  await fetch("http://localhost:3000/api/products");

  return res.json();
}

export default function Orders() {
  let orders:OrdersData[] = use(getOrders());
  let prods:ProductData[] = use(getProds());
  return (
    <main className="h-full w-full">
      <section className="container">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>№</th>
        <th>Название товара</th>
        <th>Категория</th>
        <th>Кол-во</th>
      </tr>
    </thead>
    <tbody>
      {orders.map(it => {
              return (<tr>
                      <td>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </td>
                      <td>
                        <div className="flex items-center space-x-3">
                            <div className="font-bold">
                            {it.id}
                            </div>
                        </div>
                      </td>
                      <td>
                        {prods.find(p => p.id === it.prod_id)?.name}
                        <br/>
                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                      </td>
                      <td>Purple</td>
                      <th>
                        <button className="btn btn-ghost btn-xs">details</button>
                      </th>
                    </tr>)})}
     
    </tbody>
    {/* foot */}
    <tfoot>
    <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>№</th>
        <th>Название товара</th>
        <th>Категория</th>
        <th>Кол-во</th>
      </tr>
    </tfoot>
    
  </table>
</section>
    </main>
  );
}
