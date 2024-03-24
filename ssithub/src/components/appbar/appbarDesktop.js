import { ListItem, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";

export default function AppbarDesktop ({
    matches

}){
    return(
        <AppbarContainer>
            <AppbarHeader>
                RandRenu
            </AppbarHeader>
            <MyList type="row">
                <ListItemText primary="Home" />
                <ListItemText primary="Cat" />
                <ListItemText primary="Pro" />
                <ListItemText primary="Contact Us" />
            </MyList>
            </AppbarContainer>
    );
}