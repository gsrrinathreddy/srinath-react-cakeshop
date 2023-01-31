import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material";

export default function OrderSummary(){
    const navigate = useNavigate();
    console.log("I am in order summary page")
    return(
        <>
            This is order summary page

            <Button onClick={()=>navigate(-1)}>
                Go Back
            </Button>
        </>
    )
}