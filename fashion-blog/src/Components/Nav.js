
  import {Link} from 'react-router-dom'


export default function Nav (props)  {
    return (
        <nav className="nav">
            <Link to="/">
             <div> Home</div>
            </Link>
            <Link to="/">
             <div> Women's</div>
            </Link>
            <Link to="/">
             <div> Men's</div>
            </Link>
            <Link to="/">
             <div> On the street</div>
            </Link>
            <Link to="/">
             <div> The CatWalk</div>
            </Link>
            <Link to="/">
             <div> AdWatch</div>
            </Link>
            <Link to="/">
             <div> About</div>
            </Link>

        </nav>
    )
}