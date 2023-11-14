export default function AddNewPost() {
    return (
        <main className="h-full w-full">
            <section className="containe h-full flex flex-col justify-start gap-20">
                <div className="form-control w-full max-w-xlg flex-col justify-start gap-5">
                    <label className="label">
                        {/* <span className="label-text">Post Title</span> */}
                    </label>
                    <input type="text" placeholder="Заголовох статьи" className="input input-bordered w-full max-w-xs" />
                    <textarea className="textarea textarea-bordered" placeholder="текст"></textarea>
                    {/* <input type="submit" value="Запостить эту хуйню" className="btn" /> */}
                    <button type="submit" className="btn btn-mg max-w-md">Запостить эту хуйню</button>
                </div>

            </section>
        </main>
    );
}
