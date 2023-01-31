import { Typography,Grid,Button } from '@mui/material';
import { Box } from '@mui/system';
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom';

export default function Cart(){
    const cartList = useSelector((state)=>state.cart.cartList);
    console.log(cartList)
    const navigate = useNavigate();
    return(
        <>
            <Box>
                Order Details:
                <Grid container>
                    
                    <Grid md={2}>
                    <Typography variant="h6" sx={{fontWeight:'bold'}}>
                            Name
                        </Typography>
                    {
                    cartList.map((item)=>{
                        return(
                            <Typography>
                                {item.name}
                            </Typography>
                        )
                    })
                     }
                    </Grid>
                    <Grid md={2}>
                    <Typography variant="h6" sx={{fontWeight:'bold'}}>
                            Actual Price
                        </Typography>
                    {
                    cartList.map((item)=>{
                        return(
                            <Typography>
                                {item.actualPrice}
                            </Typography>
                        )
                    })
                     }
                    </Grid>
                    <Grid md={2}>
                        <Typography variant="h6" sx={{fontWeight:'bold'}}>
                            Discounted Price
                        </Typography>
                    {
                    cartList.map((item)=>{
                        return(
                            <Typography>
                                {item.discountedPrice}
                            </Typography>
                        )
                    })
                     }
                    </Grid>
                    <Grid md={2}>
                    <Typography variant="h6" sx={{fontWeight:'bold'}}>
                            Percentage Discount
                        </Typography>
                    {
                    cartList.map((item)=>{
                        return(
                            <Typography>
                                {item.percentageDiscount}
                            </Typography>
                        )
                    })
                     }

                    </Grid>
                    <Grid md={2}>
                    <Typography variant="h6" sx={{fontWeight:'bold'}}>
                             Quantity
                        </Typography>
                    {
                    cartList.map((item)=>{
                        return(
                            <Typography>
                                {item.qty}
                            </Typography>
                        )
                    })
                     }

                    </Grid>
                    <Grid md={2}>
                    <Typography variant="h6" sx={{fontWeight:'bold'}}>
                             Price
                        </Typography>
                    {
                    cartList.map((item)=>{
                        return(
                            <Typography>
                                {item.qty*item.discountedPrice}
                            </Typography>
                        )
                    })
                     }

                    </Grid>
                </Grid>
                
                <Typography variant="h6" sx={{fontWeight:'bold'}}>
                             Total
                        </Typography>
                    {
                    cartList.map((item)=>{
                        return(
                            <Typography>
                                {item.qty*item.discountedPrice}
                            </Typography>
                        )
                    })
                     }
            </Box>

            <Button onClick={()=>navigate('order-summary')}>
                Place Order
            </Button>
        </>
    )
}