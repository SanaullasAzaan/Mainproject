import {  ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import Actions from "./actions";

export default function AppbarDesktop ({matches}){
    return(
        <AppbarContainer>
            <AppbarHeader>
                RandRenu
            </AppbarHeader>
            <MyList type="row">
                <ListItemText primary="Home" />
                <ListItemText primary="Events" />
                <ListItemText primary="Maps" />
                <ListItemText primary="Contact Us" />
            </MyList>
            <Actions/>
            </AppbarContainer>
    );
}