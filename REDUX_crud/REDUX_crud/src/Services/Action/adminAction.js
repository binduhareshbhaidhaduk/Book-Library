import axios from "axios"
import generateUniqueId from "generate-unique-id"

export const Create = (product) => ({
    type: 'ADD',
    payload: product
})

export const SRecord = (id) => {

    return {
        type: 'SINGLEREC',
        payload: id
    }
}
export const updatedrec = (newrec) => {

    return {
        type: 'UPDATED',
        payload: newrec
    }
}

export const deletRec = (id) => {

    return {
        type: 'DELETE',
        payload: id
    }
}


export const addproAsy = (data) => {
    return {
        type: 'ADDPROASYNC',
        payload: data
    }
}


// export const myThunkFun = (product) => {
//     return (dispatch) => {
//         dispatch(isLoading());

//         setTimeout(() => {
//             dispatch(Create(product));
//         }, 2000)
//     }
// }


export const isLoading = () => {
    return {
        type: 'LOADING',
    }
}

// const getProductasy =()=>{
//     return {
//         type : 'GETPRODUCTASY' ,
//         // payload:data
//     }
// }

export const addProductAsync = (product) => {
    return (dispatch) => {

        dispatch(isLoading())
        setTimeout(() => {


            product.id = generateUniqueId({ length: 4, useLetters: false })

            axios.post('  http://localhost:3000/book', product).then((res) => {
                // console.log(res.data)
                dispatch(getProductAsync())
                console.log(res, 'ok');
            }).catch((err) => {
                console.log(err, 'err')
            })
        }, 0)


    }
}

export const getProductAsync = () => {
    return (dispatch) => {

        dispatch(isLoading())
        setTimeout(()=>{

            axios.get('  http://localhost:3000/book').then((res) => {
                // console.log(res.data)
                dispatch(addproAsy(res.data));
                console.log(res, 'suc');
            }).catch((err) => {
                console.log(err, 'err')
            })

        },0)

    }
}

export const DeleteProductAsync = (id) =>{
    return (dispatch) => {
        
            axios.delete(`  http://localhost:3000/book/${id}`).then((res) => {

                dispatch(getProductAsync())
                console.log(res,"suc");
                })
                .catch((err)=>{console.log(err);})
                }
            
}


export const singleProductAsync = (id) =>{
    return (dispatch) => {
        
            axios.get(`  http://localhost:3000/book/${id}`).then((res) => {

                dispatch(SRecord(res.data))
                console.log(res.data,"bulbosour");
                })
                .catch((err)=>{console.log(err);})
                }
            
}

export const editProductAsync = (product) => {
    return (dispatch) => {
        axios.put(`http://localhost:3000/book/${product.id}`,product)
        .then((res) => {
                dispatch(getProductAsync(res.data))
                console.log(res.data,"oggey");
                })
                .catch((err)=>{console.log(err);})
                    
                }
}