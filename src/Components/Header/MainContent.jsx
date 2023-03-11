import React, { useEffect, useState } from 'react';

const MainContent = () => {
    const [item,setItme] = useState(["item1","item2","item3"]);
  
    return (
        <div class="main-content">
        <div class="page-content">
            <div class="container-fluid">

                <div class="row">
                    <div class="col">

                        <div class="h-100">
                            <div class="row mb-3 pb-1">
                                <div class="col-12">
                                    <div class="d-flex align-items-lg-center flex-lg-row flex-column">
                                        <div class="flex-grow-1">
                                            <h4 class="fs-16 mb-1">Good Morning, Anna!</h4>
                                            <p class="text-muted mb-0">Here's what's happening with your website
                                                today.</p>
                                        </div>
                                        <div class="mt-3 mt-lg-0">
                                            <form action="javascript:void(0);">
                                                <div class="row g-3 mb-0 align-items-center">
                                                    <div class="col-sm-auto">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control border-0 fs-13 dash-filter-picker shadow" data-provider="flatpickr" data-range-date="true" data-date-format="d M, Y" data-deafult-date="01 Jan 2022 to 31 Jan 2022"/>
                                                            <div class="input-group-text bg-secondary border-secondary text-white">
                                                                <i class="ri-calendar-2-line"></i>
                                                            </div>
                                                        </div>
                                                    </div>  
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>

                    </div>  
                </div>
                
                <div class="row mt-5">
                    <label htmlFor="">Filter By Tittle,Id,Category</label>
                    <div className='d-flex gap-2'>
                    <select name="" id="" className='custom-select custom-select-sm' style={{width:'33%'}}>
                        <option value="">Cat</option>
                        <option value="">Flower</option>
                        <option value="">Dog</option>
                    </select>
                    <select name="" id="" className='custom-select'style={{width:'33%'}}>
                        <option value="">2021</option>
                        <option value="">2022</option>
                        <option value="">2023</option>
                    </select>
                    <select name="" id="" className='custom-select' style={{width:'33%'}}>
                        <option value="">Tittle1</option>
                        <option value="">Tittle2</option>
                        <option value="">Tittle3</option>
                    </select>
                     <button className='btn btn-primary'>Filter</button>
                    </div>
                  <div className='justify-content-center d-flex gap-5 mt-3'>
                  {
                          item.map((item,index)=>
                          <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
  <img class="card-img-top" src="https://www.suu.edu/webservices/patterns/img/img-card-2.jpg" alt="Card image cap"/>
    <h5 class="card-title">Card title</h5>
    
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p>3000 <i className='lar la-user-circle'></i></p>
    <a href="#" class="btn btn-primary">Edit</a>
    
  </div>
</div>
                          )
                   }
                  </div>
              </div>
            </div>
            
        </div>
    </div>
    );
};

export default MainContent;