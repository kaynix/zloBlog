export default function Uploader() {
  return (
    
      <section className="container h-full flex flex-col justify-start gap-20">
        <label><p> Что б загрузить новую хрень, нужОн cvs файл с столбцами: category, name, price, quantity, quantity_tag. Цены указуй в КОПЕЙКАХ! quantity_tag - это количественное изменения(штуки, литры, килограмы)</p></label>
        <input type="file" className="file-input file-input-bordered file-input-accent file-input-lg w-full max-w-xs" />
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Upload Products</button>
      </section>
    
  );
}
