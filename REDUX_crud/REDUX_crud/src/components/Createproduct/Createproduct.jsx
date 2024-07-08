/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addProductAsync } from '../../Services/Action/adminAction';
function Createproduct() {
    const [inputState, setInputState] = useState({
        id: '',
        title: '',
        author: '',
        genre: '',
        py: ''
    });

    const { isLoading } = useSelector(state => state.adminReducer);


    // const [myProduct, setmyProduct] = useState(getData('product'));

    const [isSubmit, setIsSubmit] = useState(false);
    const navigat = useNavigate();
    const dispatch = useDispatch();



    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInputState({ ...inputState, [name]: value });

    }
    const handleSubmit = (e) => {
        e.preventDefault();


        dispatch(addProductAsync(inputState))
        setIsSubmit(true);
        // navigat('/');    

    }


    useEffect(() => {
        if (!isLoading && isSubmit) {
            console.log(isLoading, 'hjdegfkj')
            navigat('/')
        }

    }, [isLoading, isSubmit, navigat])

    return (
        <>

            <Container className='m-auto'>

                <div className="row  ps-5">
                    <div className='d-flex justify-content-center form'>

                        <div className="col6 p-3">
                            <div className=' head '>
                                <h5 className='text-white p-3'>New product</h5>
                            </div>
                            <Form onSubmit={handleSubmit} className='p-3 '>
                                <Form.Control type="text" value={inputState.id} name='id' hidden />

                                <Form.Group as={Col} controlId="formGridEmail" className='d-flex p-1 fs-6'>
                                    <Form.Label className='d-flex'>
                                        Title
                                    </Form.Label>
                                    <Form.Control type="text" onChange={handleInput} value={inputState.title} name='title' />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail" className='d-flex p-1 fs-6'>
                                    <Form.Label className='d-flex'>
                                        Author
                                    </Form.Label>
                                    <Form.Control type="text" onChange={handleInput} value={inputState.author} name='author' />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEmail" className='d-flex p-1 fs-6'>
                                    <Form.Label className='d-flex'>
                                        Genre
                                    </Form.Label>
                                    <Form.Control type="text" onChange={handleInput} value={inputState.genre} name='genre' />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail" className='d-flex p-1 fs-6'>
                                    <Form.Label className='d-flex'>
                                        Publication Year
                                    </Form.Label>
                                    <Form.Control type="num" aria-label="With textarea" onChange={handleInput} value={inputState.py} name='py' />
                                </Form.Group>

                                <Button variant="success" type='submit' disabled={isLoading}>
                                    {
                                        isLoading ? (<>
                                        <Spinner
                                            as="span"
                                            animation="grow"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        /> loading...
                                        </>) : "submit"
                                    }


                                </Button>


                            </Form>
                        </div>
                    </div>

                </div>
            </Container>
        </>
    )
}

export default Createproduct





