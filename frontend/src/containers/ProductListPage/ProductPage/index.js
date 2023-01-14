import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductPage } from '../../../actions';
import getParams from '../../../utils/getParams';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Card from '../../../components/UI/Card';

/**
* @author
* @function ProductPage
**/

const ProductPage = (props) => {

    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    const { page } = product;

    useEffect(() => {
        const params = getParams(props.location.search);
        console.log({params});
        const payload = {
            params
        }
        dispatch(getProductPage(payload));
    }, []);


    return (
        <div style={{ margin: '0 10px',
            justifyContent:'center',
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
            }}>
            <h3 style={{color:'#9c51e0'}} >{page.title}</h3>
            <Carousel
                // centerMode='true'
                infiniteLoop='true'
                dynamicHeight='true'
                renderThumbs={() => {}}
            >
                {
                    page.banners && page.banners.map((banner, index) => 
                        <a
                            key={index}
                            style={{ display: 'block',width:'100%' }}
                            href={banner.navigateTo}
                        >
                            <img src={banner.img} alt="" 
                            style={{width:'70%',height:'400px'}}/>
                        </a>
                    )
                }
            </Carousel>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                margin: '20px 0'
            }}>
                {
                    page.products && page.products.map((product, index) => 
                        <Card 
                            key={index}
                            style={{
                                width: '250px',
                                height: '200px',
                                margin: '15px'
                            }}
                        >
                            <a href={product.navigateTo}>
                                <img style={{
                                    width: '100%',
                                    height: '100%'
                                }} src={product.img} alt="" />
                            </a>
                        </Card>
                    )
                }
            </div>
        </div>
    )

}

export default ProductPage