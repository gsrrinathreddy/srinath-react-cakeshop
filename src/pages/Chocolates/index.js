import {useDispatch,useSelector} from 'react-redux'; 
import { Button,Box } from '@mui/material';
import {ordered,restocked} from '../../features/chocolates/chocolatesSlice';
import ItemCard from '../../components/ItemCard';
import AmulDarkChocolate from '../../assets/amul-dark-chocolate-55-rich-in-cocoa.webp'
import BritanniaBourbonChocolate from '../../assets/britannia-bourbon-chocolate-cream-biscuits.webp'
import Cadbury5Star from '../../assets/cadbury-5-star-chocolate-bar.webp'
import Cadbury5StarOreo from '../../assets/cadbury-5-star-oreo-chocolate-bar.webp'
import CadburyPerkChocolate from '../../assets/cadbury-cadbury-perk-chocolate-bar-ch.webp'
import CadburyDairyMilkCrispello from '../../assets/cadbury-dairy-milk-chocolate-bar-crispello.webp'
import CadburyDairyMilk from '../../assets/cadbury-dairy-milk-chocolate.webp'
import CadburyDairyMilkShorts from '../../assets/cadbury-dairy-milk-shots-ch.webp'
import CadburyGemsSugerChocolate from '../../assets/cadbury-gems-sugar-coated-chocolate-ch.webp'
import CadburyFantastikChocolate from '../../assets/candyman-fantastik-choco-bar-xl-chocolate-rich-smooth-creamy.webp'
import ChocolateFunfetti from '../../assets/chocolate_funfetti.jpg'
import ChocolateBrownie from '../../assets/chocolate-brownie-ic.webp'
import Chocolate from '../../assets/chocolate.jpg'
import ClassicMilkChocolate from '../../assets/nestle-classic-milk-chocolate-candy.webp'
import ChocolateBarCaramel from '../../assets/nestle-chocolate-bar-bar-one-nougat-caramel-filled-ch.webp'
import Grid from '@mui/material/Grid';


const chocolatesList = [
    {
    title:"Amul Dark Chocolate",
    subheader:"super chocolate",
    cardMedia:AmulDarkChocolate,
    actualPrice:'Rs 200',
    discountedPrice:'Rs 175'
    }, 
    {
    title:"Britannia Bourbon Chocolate",
    subheader:"made from heart",
    cardMedia:BritanniaBourbonChocolate,
    actualPrice:'Rs 145',
    discountedPrice:'Rs 125'
    }, 
    {
    title:"Cadbury 5 Star",
    subheader:"Have fun of chocolate flavor",
    cardMedia:Cadbury5Star,
    actualPrice:'Rs 175',
    discountedPrice:'Rs 145'
    }, 
    {
    title:"Cadbury 5 Star Oreo",
    subheader:"Chocolate in cake",
    cardMedia:Cadbury5StarOreo,
    actualPrice:'Rs 100',
    discountedPrice:'Rs 75'
    }, 
    {
    title:"Cadbury Perk Chocolate",
    subheader:"Super melon Cake",
    cardMedia:CadburyPerkChocolate,
    actualPrice:'Rs 100',
    discountedPrice:'Rs 75'
    }, 
    {
    title:"Cadbury Dairy Milk Crispello",
    subheader:"Pure vegetarian cake",
    cardMedia:CadburyDairyMilkCrispello,
    actualPrice:'Rs 100',
    discountedPrice:'Rs 75'
    }, 
    {
    title:"Cadbury Dairy Milk",
    subheader:"Make your wedding more sweetful and memorable",
    cardMedia:CadburyDairyMilk,
    actualPrice:'Rs 100',
    discountedPrice:'Rs 75'
    }, 
    {
    title:"Cadbury Dairy Milk Shorts",
    subheader:"Have the fun with cup cakes",
    cardMedia:CadburyDairyMilkShorts,
    actualPrice:'Rs 100',
    discountedPrice:'Rs 75'
    }, 
    {
    title:"Cadbury Gems Suger Chocolate",
    subheader:"Enjoy fruit flavour of grape and berries mixed",
    cardMedia:CadburyGemsSugerChocolate,
    actualPrice:'Rs 100',
    discountedPrice:'Rs 75'
    }, 
    {
    title:"Cadbury Fantastik Chocolate",
    subheader:"Keep counting the numbers",
    cardMedia:CadburyFantastikChocolate,
    actualPrice:'Rs 100',
    discountedPrice:'Rs 75'
    }, 
    {
    title:"Chocolate Funfetti",
    subheader:"Its not all about watching the rainbow, you have it too",
    cardMedia:ChocolateFunfetti,
    actualPrice:'Rs 100',
    discountedPrice:'Rs 75'
    }, 
    {
    title:"Chocolate Brownie",
    subheader:"Now have your favourite snicker chocolate in the cake form",
    cardMedia:ChocolateBrownie,
    actualPrice:'Rs 100',
    discountedPrice:'Rs 75'
    }, 
    {
    title:"Chocolate",
    subheader:"Gift it to your special ones",
    cardMedia:Chocolate,
    actualPrice:'Rs 100',
    discountedPrice:'Rs 75'
    }, 
    {
    title:"Classic Milk Chocolate",
    subheader:"Now its time for Strawberries",
    cardMedia:ClassicMilkChocolate,
    actualPrice:'Rs 100',
    discountedPrice:'Rs 75'
    }, 
    {
    title:"Chocolate Bar Caramel",
    subheader:"Wedding ...........with the cakes",
    cardMedia:ChocolateBarCaramel,
    actualPrice:'Rs 100',
    discountedPrice:'Rs 75'
    }, 

]
export default function Chocolates(){
    const chocolates = useSelector((state)=> state.chocolate.noOfChocolates)
    const dispatch = useDispatch(); 
    return(
        <>
        {chocolates}
         <Box sx={{marginRight:'100px',marginLeft:'100px',marginTop:'50px'}}>
         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
               
               {
               chocolatesList.map((item)=>{
                   return(
                       <Grid item xs={2} sm={2} md={3} display='flex' justifyContent='center'>
                          <ItemCard 
                            title={item.title} 
                            subheader={item.subheader} 
                            cardMedia={item.cardMedia} 
                            actualPrice={item.actualPrice} 
                            discountedPrice={item.discountedPrice}
                            order={ordered}
                          />
                       </Grid>
                   )
               })
           }
           
           </Grid>
        </Box>
            

           
            
            <h2>no of chocolates : {chocolates}</h2>
            This is a chocolate page
            <Button
            onClick = {()=>dispatch(ordered(10))}
            >
                Order chocolates
            </Button>
            <Button
            onClick = {()=>dispatch(restocked(10))}
            >
                Restock Chocolates
            </Button>
        </>
    )
}