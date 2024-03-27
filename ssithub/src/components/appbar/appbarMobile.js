import { IconButton } from "@mui/material";
import { AppbarContainer,AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";

export default function AppbarMobile ({
    matches

}){
    return(

        <AppbarContainer>
            <IconButton>
                <MenuIcon/>
                
            </IconButton>
            <AppbarHeader textAlign={"center"} variant="h4" >
                My Bags
            </AppbarHeader>
            <IconButton>
            <PersonIcon/>
            </IconButton>
        </AppbarContainer>
    );
}