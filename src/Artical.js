export default function Artical({name, email, children = "123"}) {
    const showCategories = false;
    return (
        <>
        <div>
            <div>
                {showCategories === true ? (
                    <h1>{name}</h1>
                ) : (
                    "Not Name"
                )
                }
            </div>
            <h3>{email}</h3>
            <h3>1998</h3>
            <hr></hr>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium minus placeat hic vel adipisci quisquam ex et eligendi itaque vitae mollitia ducimus, sit iste? Soluta, laudantium sunt est quo earum, itaque et ut quam doloremque consequuntur, labore tempore minima fuga provident iste. Eos, autem voluptas recusandae neque molestias rem alias earum error quam. Quas fugiat laboriosam eos facere ea voluptatibus corporis veritatis praesentium hic quos? Provident sapiente in voluptas molestiae ratione est nesciunt reiciendis itaque quos, ex, tenetur nisi possimus aspernatur, modi eos perspiciatis illum. Nam, dignissimos delectus! Impedit praesentium modi vero recusandae id cumque quo ducimus aut cupiditate eaque.</p>
            {children}
        </div>
        </>
    )
}