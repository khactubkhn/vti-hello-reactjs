import image from '../../img/banner.png'
import './banner.css'

function Banner(){
    return (
        <div>
            <img className={"banner-img"} src={image} alt=""/>
        </div>
    )
};

export default Banner
