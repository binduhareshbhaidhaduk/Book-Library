/* eslint-disable no-unused-vars */
// import generateUniqueId from 'generate-unique-id';
// import { useEffect, useState } from 'react';
// import { Container } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// // import Row from 'react-bootstrap/Row';
// // import Table from 'react-bootstrap/Table';
// import { useNavigate } from 'react-router';
// // import { Link } from 'react-router-dom';
// // import { json } from 'react-router';
// import { getData, setData } from '../Services/Helper';
// function Editproduct() {
//     const [inputState, setInputState] = useState({
//         id: '',
//         title: '',
//         price: '',
//         catagores: '',
//         discription: '',
//     });

//     const [myProduct, setmyProduct] = useState(getData('product'));
    
//     const [isSubmit, setisSubmit] = useState(false);    
//     const navigat = useNavigate();



//     const handleInput = (e) => {
//         let name = e.target.name;
//         let value = e.target.value;
//         setInputState({ ...inputState, [name]: value });

//     }
//     const handleSubmit = (e) => {
//        e.preventDefault();

//         let obj = {
//             ...inputState,
//             id: generateUniqueId({ length: 4, useLetters: false })
//         }
//         setisSubmit(true);
//         setmyProduct([...myProduct, obj])
//         }
        
//         useEffect(() => {
//             setData('product',myProduct);
    
//         console.log('hello');

//     }, [myProduct])

//     useEffect(() => {
//         if (isSubmit) {
//             console.log(isSubmit ,'hjdegfkj')
//             navigat('/')
//         }

//     }, [isSubmit,navigat])

//     return (
//         <>
//             <Container className='m-auto'>

//                 <div className="row  ps-5">
//                     <div className='d-flex justify-content-center form'>

//                         <div className="col6 p-3">
//                             <div className=' head '>
//                                 <h5 className='text-white p-3'>New Employee</h5>
//                             </div>
//                             <Form onSubmit={handleSubmit} className='p-3 '>
//                                 <Form.Control type="text" value={inputState.id} name='id' hidden />

//                                 <Form.Group as={Col} controlId="formGridEmail" className='d-flex p-1 fs-6'>
//                                     <Form.Label className='d-flex'>
//                                         Title
//                                     </Form.Label>
//                                     <Form.Control type="text" onChange={handleInput} value={inputState.title} name='title' />
//                                 </Form.Group>
//                                 <Form.Group as={Col} controlId="formGridEmail" className='d-flex p-1 fs-6'>
//                                     <Form.Label className='d-flex'>
//                                         Price
//                                     </Form.Label>
//                                     <Form.Control type="text" onChange={handleInput} value={inputState.price} name='price' />
//                                 </Form.Group>

//                                 <Form.Group as={Col} controlId="formGridEmail" className='d-flex p-1 fs-6'>
//                                     <Form.Label className='d-flex'>
//                                         Catagores
//                                     </Form.Label>
//                                     <Form.Control type="text" onChange={handleInput} value={inputState.catagores} name='catagores' />
//                                 </Form.Group>
//                                 <Form.Group as={Col} controlId="formGridEmail" className='d-flex p-1 fs-6'>
//                                     <Form.Label className='d-flex'>
//                                         Discription
//                                     </Form.Label>
//                                     <Form.Control as="textarea" aria-label="With textarea" onChange={handleInput} value={inputState.discription} name='discription' />
//                                 </Form.Group>

//                                 <Button className='btn btn-success' type="submit" >
//                                     Submit
//                                 </Button>
//                             </Form>
//                         </div>
//                     </div>

//                 </div>
//             </Container>
//         </>
//     )
// }

// export default Editproduct





import {  useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Container, Button, Col, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { editProductAsync, singleProductAsync, updatedrec } from '../../Services/Action/adminAction';
import { getData } from '../Service/Helper';


function EditProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [inputState, setInputState] = useState({
        id: '',
        title: '',
        author: '',
        genre: '',
        py: ''
    });
    // const [myProduct, setMyProduct] = useState(getData('products'));
    // const [isSubmit, setIsSubmit] = useState(false);
    const {product} = useSelector(state => state.adminReducer)

    const dispatch=useDispatch()
    
    
    // useEffect(() => {
    //     const product = myProduct.find(p => p.id === id);
    //     if (product) {
    //         setInputState(product);
    //     }
    // }, [id, myProduct]);

    
  console.log(inputState,'hsiukj');
    
    
    const handleInput = (e) => {
        const { name, value } = e.target;
        setInputState({ ...inputState, [name]: value });
    };
    console.log("harry potter",product);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const updatedProducts = myProduct.map(p =>
    //         p.id === id ? { ...p, ...inputState } : p
    //     );
    //     setMyProduct(updatedProducts);
    //     setIsSubmit(true);
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // const updatedProducts = myProduct.map(p =>
    //     //     p.id === id ? { ...p, ...inputState } : p
    //     //     );
    //     // console.log('nslki',updatedProducts);
    //     // setMyProduct(updatedProducts);
    //     // setIsSubmit(true);
    //     // getData('product', updatedProducts);  

    //     dispatch(updatedrec(inputState))
    // };
  
    // useEffect(() => {
    //     if (isSubmit) {
    //         setData('product', myProduct);
    //         navigate('/');
    //     }
    // }, [isSubmit, myProduct, navigate]);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hello",inputState);
        dispatch(editProductAsync(inputState));
        // setIsSubmit(true);
        // navigate('/');
    }

    useEffect(() => {
        if (product) {
            setInputState(product);
        }else{
            navigate('/');
        }
    }, [product]);

    // useEffect(()=>{
    //     dispatch(singleProductAsync(id));
    // },[dispatch,id]);

    return (
        <Container className='m-auto'>
            <div className="row ps-5">
                <div className='d-flex justify-content-center form'>
                    <div className="col6 p-3">
                        <div className='head'>
                            <h5 className='text-white p-3'>Edit Product</h5>
                        </div>
                        <Form onSubmit={handleSubmit} className='p-3 '>
                            <Form.Control type="text" value={inputState.id} name='id' hidden />

                            <Form.Group as={Col} controlId="formGridTitle" className='d-flex p-1 fs-6'>
                                <Form.Label className='d-flex'>Title</Form.Label>
                                <Form.Control type="text" onChange={handleInput} value={inputState.title} name='title' />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPrice" className='d-flex p-1 fs-6'>
                                <Form.Label className='d-flex'>Author</Form.Label>
                                <Form.Control type="text" onChange={handleInput} value={inputState.author} name='author' />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridCategories" className='d-flex p-1 fs-6'>
                                <Form.Label className='d-flex'>Genre</Form.Label>
                                <Form.Control type="text" onChange={handleInput} value={inputState.genre} name='genre' />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridDescription" className='d-flex p-1 fs-6'>
                                <Form.Label className='d-flex'>Publication Year</Form.Label>
                                <Form.Control  onChange={handleInput} value={inputState.py} name='py' type='number'/>
                            </Form.Group>
                            <Button className='btn btn-success' type="submit">Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default EditProduct;


