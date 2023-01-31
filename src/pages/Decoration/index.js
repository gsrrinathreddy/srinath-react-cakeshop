import {useDispatch,useSelector} from 'react-redux'; 
import { Button } from '@mui/material';
import {ordered,restocked} from '../../features/cakes/cakesSlice';

export default function Decoration(){
    const cakes = useSelector((state)=> state.cake.noOfCakes)
    const dispatch = useDispatch(); 
    return(
        <>
            <h2>no of cakes : {cakes}</h2>
            
            <Button
            onClick = {()=>dispatch(ordered(10))}
            >
                Order Decoration Item
            </Button>
            <Button
            onClick = {()=>dispatch(restocked(10))}
            >
                Restock Decoration Items
            </Button>
        </>
    )
}