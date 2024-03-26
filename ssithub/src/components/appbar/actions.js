import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { MyList } from "../../styles/appbar";
import PersonIcon from "@mui/icons-material/Person";
import { ActionIconsContainerDesktop, ActionIconsContainerMobile } from "../../styles/appbar";

export default function Actions({matches}){
    const Component=matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;
    return(
        <Component>
            <MyList type="row">
        <ListItemButton
         sx={{
            justifyContent:'center',
         }}
        >
            <ListItemIcon
             sx={{
                display:'flex',
                justifyContent:'center',
             }}
            >
                <PersonIcon/>
            </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem/>
      </MyList>

        </Component>
      
    );
}