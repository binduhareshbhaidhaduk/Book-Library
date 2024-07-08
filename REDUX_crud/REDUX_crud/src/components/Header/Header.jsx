import { Link } from 'react-router-dom';


const Header = () => (
  <header>
    <div className='p-4 m-0 head text-white d-flex '>

      <h4 className='m-0'>Book Library</h4>
      <div>
      <Link to='/' className='p-3 text-white'>Home</Link>
      <Link to='/create' className='p-3 text-white  '>Create</Link>
      </div>
    </div>





    {/* <Link to='/edit'>Edit</Link> */}

  </header>
);

export default Header;
