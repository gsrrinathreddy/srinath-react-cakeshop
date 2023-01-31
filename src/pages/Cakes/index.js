import {useDispatch,useSelector} from 'react-redux'; 
import { Button,Box } from '@mui/material';
import {ordered,restocked} from '../../features/cakes/cakesSlice';
import ItemCard from '../../components/ItemCard';
import BakingoCake from '../../assets/Bakingo_cake.jpg'
import CakeSquare from '../../assets/cake_square.jpg'
import ChocolateFunfetti from '../../assets/chocolate_funfetti.jpg';
import Chocolate from '../../assets/chocolate.jpg'
import CocomelonCake from '../../assets/cocomelon_cake.jpg'
import EgglessChocolate from '../../assets/Eggless_chocolate_cake.jpg';
import FondantWedding from '../../assets/Fondant_wedding_cake.jpg'
import FunfettiCupcakes from '../../assets/Funfetti_cupcakes.jpg'
import GrapeBerry from '../../assets/grapeberry_cake.jpg';
import NumberCakes from '../../assets/Number-Cakes-Recipe.jpg'
import RainbowCake from '../../assets/Rainbow_cake.jpg'
import SnickerFuse from '../../assets/Snicker_fuse_chocolate_cake.jpg';
import SpecialValsad from '../../assets/special_valsad_cake.jpg'
import VeganStrawberry from '../../assets/vegan-strawberry-cake.jpg'
import WeddingCakes from '../../assets/Wedding_cake.jpg';
import Grid from '@mui/material/Grid';


const cakesList = [
    {
    id:1,
    title:"Bakingo Cake",
    subheader:"super cake",
    cardMedia:BakingoCake,
    actualPrice:100,
    discountedPrice:75,
    rating:4.2,
    sellingStatus:'Best Seller'
    }, 
    {
    id:2,
    title:"Cake Square",
    subheader:"made from heart",
    cardMedia:CakeSquare,
    actualPrice:145,
    discountedPrice:125,
    rating:4.3,
    sellingStatus:'Premium'
    }, 
    {
    id:3,
    title:"Chocolate Funfetti",
    subheader:"Have fun of chocolate flavor",
    cardMedia:ChocolateFunfetti,
    actualPrice:200,
    discountedPrice:155,
    rating:4.5,
    sellingStatus:'Out of Stock'
    }, 
    {
    id:4,
    title:"Chocolate Cake",
    subheader:"Chocolate in cake",
    cardMedia:Chocolate,
    actualPrice:145,
    discountedPrice:125,
    rating:4.8,
    sellingStatus:'Best Seller'
    }, 
    {
    id:5,
    title:"Cocomelon Cake",
    subheader:"Super melon cake",
    cardMedia:CocomelonCake,
    actualPrice:135,
    discountedPrice:95,
    rating:3.5,
    sellingStatus:'Best Seller'
    }, 
    {
    id:6,
    title:"Eggless Chocolate Cake",
    subheader:"Pure vegetarian cake",
    cardMedia:EgglessChocolate,
    actualPrice:120,
    discountedPrice:105,
    rating:3.8,
    sellingStatus:'Best Seller'
    }, 
    {
    id:7,
    title:"Fondent Wedding Cake",
    subheader:"Make your wedding more sweetful and memorable",
    cardMedia:FondantWedding,
    actualPrice:120,
    discountedPrice:85,
    rating:3.6,
    sellingStatus:'Best Seller'
    }, 
    {
    id:8,
    title:"Funfetti Cup Cakes",
    subheader:"Have the fun with cup cakes",
    cardMedia:FunfettiCupcakes,
    actualPrice:180,
    discountedPrice:145,
    rating:4.4,
    sellingStatus:'Best Seller'
    }, 
    {
    id:9,
    title:"Grape Berry Cake",
    subheader:"Enjoy fruit flavour of grape and berries mixed",
    cardMedia:GrapeBerry,
    actualPrice:200,
    discountedPrice:175,
    rating:4.0,
    sellingStatus:'Best Seller'
    }, 
    {
        id:1,
    title:"Number Cakes Recipe",
    subheader:"Keep counting the numbers",
    cardMedia:NumberCakes,
    actualPrice:230,
    discountedPrice:205,
    rating:4.1,
    sellingStatus:'Best Seller'
    }, 
    {
    title:"Rainbow Cakes",
    subheader:"Its not all about watching the rainbow, you have it too",
    cardMedia:RainbowCake,
    actualPrice:320,
    discountedPrice:125,
    rating:4.1,
    sellingStatus:'Best Seller'
    }, 
    {
    title:"Snicker Fuse Chocolate Cake",
    subheader:"Now have your favourite snicker chocolate in the cake form",
    cardMedia:SnickerFuse,
    actualPrice:120,
    discountedPrice:85,
    rating:4.8,
    sellingStatus:'Best Seller'
    }, 
    {
    title:"Special Valsad Cake",
    subheader:"Gift it to your special ones",
    cardMedia:SpecialValsad,
    actualPrice:200,
    discountedPrice:175,
    rating:4.9,
    sellingStatus:'Best Seller'
    }, 
    {
    title:"Vegan Strawberry Cake",
    subheader:"Now its time for Strawberries",
    cardMedia:VeganStrawberry,
    actualPrice:230,
    discountedPrice:215,
    rating:4.2,
    sellingStatus:'Best Seller'
    }, 
    {
    title:"Wedding Cake",
    subheader:"Wedding ...........with the cakes",
    cardMedia:WeddingCakes,
    actualPrice:100,
    discountedPrice:85,
    rating:4.7,
    sellingStatus:'Best Seller'
    }, 

]
export default function Cakes(){
    const cakes = useSelector((state)=> state.cake.orderCart)
   // console.log("cakes",cakes)
    const dispatch = useDispatch(); 
    return(
        <>
         <Box sx={{marginRight:'100px',marginLeft:'100px',marginTop:'50px'}}>
         <Grid container spacing={{ xs: 2, md:6 }} columns={{ xs: 4, sm: 8, md: 12 }} >
               
               {
               cakesList.map((item)=>{
                   return(
                       <Grid item xs={6} sm={2} md={3} display='flex' justifyContent='center' >
                          <ItemCard 
                            title={item.title} 
                            subheader={item.subheader} 
                            cardMedia={item.cardMedia} 
                            actualPrice={item.actualPrice} 
                            discountedPrice={item.discountedPrice}
                            rating={item.rating}
                            sellingStatus={item.sellingStatus}
                            order={ordered}
                            />
                       </Grid>
                   )
               })
           }
           
           </Grid>
        </Box>
            

           
{/*             
            <h2>no of cakes : {cakes}</h2>
            This is a cake page
            <Button
            onClick = {()=>dispatch(ordered(10))}
            >
                Order cake
            </Button>
            <Button
            onClick = {()=>dispatch(restocked(10))}
            >
                Restock Cakes
            </Button> */}
        </>
    )
}