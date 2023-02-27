import LightStartIcon from "../LightStarIcon/lightStartIcon";
import DarkStarIcon from "../DarkStartIcon/darkStarIcon";

function ProductRating({star}){
    let lightStars = [];
    for(let i = 0; i< star; i++){
        lightStars.push(<LightStartIcon key={i} />);
    }

    let darkStars = [];

    for(let i = 0; i < 5 - star; i++){
        darkStars.push(<DarkStarIcon key={5-i} />)
    }

    return (
        <div>
            {
                lightStars
            }
            {
                darkStars
            }
        </div>
    )
}


export default ProductRating;