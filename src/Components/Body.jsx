import Collagen_week from "../Body/Collagen_week";
import Featured_brand from "../Body/Featured_brands";
import Full_checkups from "../Body/Full_checkups";
import Pathology_off from "../Body/Pathology_off";
import Personal_care from "../Body/Personal_care";
import Shop_concerns from "../Body/Shop_concerns";

function Body(){
    return(<>
    <Shop_concerns />
    <Full_checkups />
    <Featured_brand />
    <Collagen_week />
    <Personal_care />
    <Pathology_off />
    </>)
}

export default Body;