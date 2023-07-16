
export default function PostItem({ id, title, content }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="/fr_jacket.webp" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    {title}
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
  )
}


{/* <div className="card lg:card-side bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">#{id} {title}</h2>
        <p>{content}</p>
      </div>
    </div> */}