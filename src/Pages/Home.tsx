import React from 'react'
import Banner from './Banner'
import ProductCards from './ProductCards'
import ProductSlik from './ProductSlik'
import SingleBanner from './SingleBanner'

const Home = () => {
    return (
        <>
            <Banner />
           <SingleBanner/>
            <ProductSlik />
            <ProductCards />
            <div className="col-12 bg-light targeted-scrollbox mt-3 px-3">
                <h4 className="m-2 ps-2 text-secondary bolder">Shop by Category</h4>
                <div className="d-flex flex-wrap justify-content-center " style={{ maxWidth: '100%' }}>
                    {
                        [1, 1, 1, 1, 1, 1].map(x => <div className="col-6 col-sm-4 col-md-2 col-lg-2 p-2">
                            <img style={{width:'100%' }} src="https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Daily-Essentials-min.png" alt="" />
                        </div>)
                    }
                    {
                        [1, 1, 1, 1, 1, 1].map(x => <div className="col-6 col-sm-4 col-md-2 col-lg-2 p-2">
                            <img style={{width:'100%' }} src="https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Daily-Essentials-min.png" alt="" />
                        </div>)
                    }
                    {
                        [1, 1, 1, 1, 1, 1].map(x => <div className="col-6 col-sm-4 col-md-2 col-lg-2 p-2">
                            <img style={{width:'100%' }} src="https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Daily-Essentials-min.png" alt="" />
                        </div>)
                    }
                </div>
            </div>
            <ProductCards />
            <ProductSlik />
            <SingleBanner/>
        </>
    )
}

export default Home