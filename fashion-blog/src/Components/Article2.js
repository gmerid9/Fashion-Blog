import { Link} from "react-router-dom"

export default function Article2 (props) {
    return (
      <>
      <article className="article">
      <h3 className="date">11/11/20</h3>
      <h2 className="title">Vintage in Vogue</h2>
      <img src="https://ps-wise-course.herokuapp.com/fashionblog/blog-image-2.jpg" alt="vintage in vogue" />
        <p className="paragraph">Selfies sunt, dolor sit amet consectetur adipisicing elit. Repellat quidem deserunt
nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia
cupiditate eveniet velit officiis magni aliquid, laborum dolor? Quasi? Veniam amet
rerum ducimus est ea at neque alias. Temporibus perspiciatis at impedit voluptas
aut voluptates facere totam aliquid debitis rerum, ex consequuntur, nulla eius quae corrupti
optio atque ut. Repellendus molestiae doloribus recusandae, itaque voluptatibus placeat
repellat deserunt amet eaque dignissimos, iste sapiente magnam doloremque. Fugit, cum,
cupiditate aliquam, mollitia quisquam sed nulla eveniet doloribus neque optio odio qui! ld
architecto impedit consequatur r</p>
         <Link className="continue" >
         <h4 >Continues ...</h4>
         </Link>
        
      </article>
      </>
    )
  }