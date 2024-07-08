// // import generateUniqueId from 'generate-unique-id';
// // import { useState } from 'react';
// import { Container, Form } from 'react-bootstrap';
// import Table from 'react-bootstrap/Table';
// // import Header from '../Header/Header'
// // import { getData } from '../Services/Helper';
// import { useNavigate, useParams } from 'react-router';
// // import Form from 'react-bootstrap/Form';
// import { useDispatch, useSelector } from 'react-redux';
// import { DeleteProductAsync, SRecord, deletRec, getProductAsync, singleProductAsync } from '../../Services/Action/adminAction';
// import { useEffect, useState } from 'react';
// // import { Button } from 'bootstrap';


// function Home() {
//   const dispatch = useDispatch();
//   const [recid, setRecId] = useState('');
//   const navigate = useNavigate();


//   const [selectedDepartment, setSelectedDepartment] = useState('');
//   const [search, setSearch] = useState('');

//   const { products, product } = useSelector(state => state.adminReducer);
//   console.log("pokemon", products)

//   const handleEdit = (id) => {
//     setRecId(id)
//     dispatch(singleProductAsync(id));
//     console.log("dinosour", id);
//     // navigate(`/edit/${id}`)
//   }

//   const handleSearch = (e) => {
//     setSearch(e.target.value);
//     const data = getData('employee');
//     const searchData = data.filter(item =>
//         item.empName.toLowerCase().includes(e.target.value.toLowerCase())
//     );
//     setViewemployee(searchData);
// }

//   const handleDelete = (id) => {

//     dispatch(DeleteProductAsync(id));
//   }


//   useEffect(() => {
//     if (product) {

//       navigate(`/edit/${recid}`)

//     }
//   }, [product])
//   useEffect(() => {

//     dispatch(getProductAsync())
//   }, [])






//   return (
//     <>
//       <Container >
//         <div className='p-2 d-flex  text-light '>
//           {/* <h4 className='p-1 m-0 head'>ALL</h4> */}
//           <div className='d-flex'>
//           <select onChange={handleTitleChange} value={selectedTitle}>
//                         <option value="">Select Book</option>
//                         {products.map(book => (
//                             <option key={book} value={book}>{book}</option>
//                         ))}
//                     </select>
//                     <div className='d-flex'>
//                         <Form.Control
//                             type="text"
//                             name='search'
//                             placeholder='Search'
//                             value={search}
//                             onChange={handleSearch}
//                         />
//                         <button
//                             type='submit'
//                             className='btn btn-light'
//                             onClick={handleSubmit}
//                         >
//                             <i className="bi bi-search"></i>
//                         </button>
//                     </div>
//           </div>
//           <p></p>
//           {/* <button type='submit' className='btn' onClick={() => { handleReset() }}><i className="bi bi-arrow-clockwise fs-4 text-white"></i></button> */}


//           <div className="shelf">
//             {products.map((product) => (
//               <div className="col" key={product.id}>
//                 <div className={`book-ui ${product.theme}`}>
//                   <div className="cover">
//                     <div className="front">
//                       <h1 className='p-3 fs-1'>{product.title}</h1>
//                       <ul className="details">
//                         <li><strong>Title:</strong> {product.title}</li>
//                         <li><strong>Author:</strong> {product.author}</li>
//                         <li><strong>Genre:</strong> {product.genre}</li>
//                         <li><strong>Published Year:</strong> {product.py}</li>
//                       </ul>
//                     </div>
//                     <ul className="pages">
//                       <li></li>
//                       <li className="second-page">
//                         <div className="back">
//                           <div className="bottom d-block">
//                             <button type="button" className="btn text-primary"><i className="bi bi-eye-fill fs-4"></i></button>
//                             <button type="button" className="btn text-white" onClick={() => handleEdit(product.id)}><i className="bi bi-pencil-square fs-4"></i></button>
//                             <button type="button" className="btn text-danger" onClick={() => handleDelete(product.id)}><i className="bi bi-trash3 fs-4"></i></button>
//                           </div>
//                         </div>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* <Table striped bordered hover>
//                     <thead>
//                         <tr>
//                             <th>Id</th>
//                             <th>Title</th>
//                             <th>Author</th>
//                             <th>Genre</th>
//                             <th>Publication Year</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             products.map(data => (
//                                 <tr key={data.id}>
//                                     <td>{data.id}</td>
//                                     <td>{data.title}</td>
//                                     <td>{data.author}</td>
//                                     <td>{data.genre}</td>
//                                     <td>{data.py}</td>
//                                     <td className='d-flex justify-content-around'>
//                                         <button type='submit' className='btn text-primary' ><i className="bi bi-eye-fill fs-4"></i></button>
//                                         <button type='submit' className='btn text-warning' onClick={() => handleEdit(data.id)}><i className="bi bi-pencil-square fs-4"></i></button>
//                                         <button type='submit' className='btn text-danger' onClick={() => handleDelete(data.id)}><i className="bi bi-trash3 fs-4"></i></button>
//                                     </td>

//                                 </tr>
//                             ))
//                         }

//                     </tbody>

//                 </Table > */}

//       </Container >

//     </>
//   )
// }

// export default Home;


import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteProductAsync, singleProductAsync, getProductAsync } from '../../Services/Action/adminAction';
import { useEffect, useState } from 'react';

function Home() {
  const dispatch = useDispatch();
  const [recid, setRecId] = useState('');
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { products, product } = useSelector(state => state.adminReducer);
  console.log("pokemon", products);

  const handleEdit = (id) => {
    setRecId(id);
    dispatch(singleProductAsync(id));
    console.log("dinosour", id);
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
    filterProducts(e.target.value, selectedGenre);
  }

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
    filterProducts(search, e.target.value);
  }



  const filterProducts = (searchTerm, genre) => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const filtered = products.filter(product =>
      (product.title.toLowerCase().includes(lowercasedSearchTerm) ) &&
      ( product.genre === genre) 
    );
    setFilteredProducts(filtered);
  }

  const handleDelete = (id) => {
    dispatch(DeleteProductAsync(id));
  }

  useEffect(() => {
    if (product) {
      navigate(`/edit/${recid}`);
    }
  }, [product]);

  useEffect(() => {
    dispatch(getProductAsync());
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <>
      <Container>
        <div className='p-2 d-flex text-light'>
          <div className='d-flex'>
            <Form.Control
              type="text"
              name='search'
              placeholder='Search by Title'
              value={search}
              onChange={handleSearch}
            />
            <Button variant='light' onClick={handleSearch}>
              <i className="bi bi-search"></i>
            </Button>
          </div>
          <div className='d-flex'>
            <Form.Select value={selectedGenre} onChange={handleGenreChange}>
              <option >All Genres</option>
              {Array.from(new Set(products.map(product => product.genre))).map((genre, index) => (
                <option key={index} value={genre}>{genre}</option>
              ))}
            </Form.Select>
            
          </div>
        </div>
        <div className="shelf">
          {filteredProducts.map((product) => (
            <div className="col" key={product.id}>
              <div className={`book-ui ${product.theme}`}>
                <div className="cover">
                  <div className="front">
                    <h1 className='p-3 fs-1'>{product.title}</h1>
                    <ul className="details">
                      <li><strong>Title:</strong> {product.title}</li>
                      <li><strong>Author:</strong> {product.author}</li>
                      <li><strong>Genre:</strong> {product.genre}</li>
                      <li><strong>Published Year:</strong> {product.py}</li>
                      <li><strong>Department:</strong> {product.department}</li>
                    </ul>
                  </div>
                  <ul className="pages">
                    <li></li>
                    <li className="second-page">
                      <div className="back">
                        <div className="bottom d-block">
                          <button type="button" className="btn text-primary"><i className="bi bi-eye-fill fs-4"></i></button>
                          <button type="button" className="btn text-white" onClick={() => handleEdit(product.id)}><i className="bi bi-pencil-square fs-4"></i></button>
                          <button type="button" className="btn text-danger" onClick={() => handleDelete(product.id)}><i className="bi bi-trash3 fs-4"></i></button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}

export default Home;
