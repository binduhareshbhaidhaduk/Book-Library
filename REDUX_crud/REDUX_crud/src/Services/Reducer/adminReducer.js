/* eslint-disable no-case-declarations */
import generateUniqueId from 'generate-unique-id';
// import getData from 'service/Helper'
import { getData, setData } from '../../components/Service/Helper';
import { isLoading } from '../Action/adminAction';

const initialState = {
    products: getData('products'),
    product: null,
    isLoading:false
};

export const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            let prd = {
                ...action.payload,
                id: generateUniqueId({ length: 4, useLetters: false })
            };
            console.log(prd, 'helohjxfbje');
            let storage = [...state.products, prd];
            localStorage.setItem('products', JSON.stringify(storage));
            return {
                ...state,
                products: storage,
                isLoading:false
            }

        case 'SINGLEREC':
            // let singleRec=state.products.find(prd => prd.id === action.payload)            

            // console.log('single', singleRec);
            return {
                ...state,
                product: action.payload
            }
        case 'UPDATED':
            let storage2 = [...state.products];
            let updatedpro = storage2.map((pro) => {

              if(pro.id == state.product.id){
                return {
                    ...pro,
                    ...action.payload
                }
              }else{
                return pro
              }

            })
            setData('products',updatedpro);
            return {
                ...state,
                products: updatedpro,
                product:null
            }

        case 'DELETE':
            const deletRec=state.products.filter(prd => prd.id !== action.payload)

            setData('products',deletRec);
            return {...state, products:deletRec}

        case 'LOADING':
            return {...state, isLoading: true}

        case 'ADDPROASYNC':
            return {
                ...state,
                products:action.payload,
                product:null,
                isLoading:false
            }

        default:
            return state;

    }
};

export default adminReducer;

