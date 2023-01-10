import React from 'react'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="d-flex flex-column">
                    <img className="navbar-brand" src="https://martjackstorage.blob.core.windows.net/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/logo.jpg" />
                    <button className='btn btn-sucess catlist rounded-0 fs-4 py-0'>SHOP BY CATEGORY <i className="bi bi-chevron-down"></i></button>
                </div>

                <div className="collapse navbar-collapse ms-5" id="navbarTogglerDemo03">

                    <div className="input-group">
                        <input type="text" className="form-control rounded-0" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <span className="input-group-text bg-light rounded-0" id="basic-addon2"><i className="bi bi-search"></i></span>
                    </div>

                    <div className="d-flex row col-3 ms-2">
                        <div className="col-1 fs-3"><i className="bi bi-geo-alt text-success"></i></div>
                        <div className="col-9 navLoc ps-3">
                            <p className='m-0'>Collect from Store</p>
                            <p className='m-0'>Spectrum Mall Noida</p>
                        </div>
                        <div className="col-1 d-flex justify-content-center align-items-center ">
                        <i className="bi bi-chevron-down"></i>
                        </div>
                    </div>

                    <div className="d-flex row col-3 ms-2">
                        <div className="col-1 fs-3"><i className="bi bi-person text-success"></i></div>
                        <div className="col-9 navLoc ps-3">
                            <p className='m-0'>Collect from Store</p>
                            <p className='m-0'>Spectrum Mall Noida</p>
                        </div>
                        <div className="col-1 d-flex justify-content-center align-items-center ">
                        <i className="bi bi-chevron-down"></i>
                        </div>
                    </div>

                    <div className="d-flex row col-3 ms-2">
                        <div className="col-2 fs-3 text-success"><i className="bi bi-cart3"></i></div>
                        <div className="col-9 navLoc">
                            <p className='m-0'>My Cart</p>
                            <p className='m-0 text-danger bolder'>0 Items</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav