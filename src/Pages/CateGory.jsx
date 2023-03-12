import React from 'react';

const CateGory = () => {
    return (
        <div className="main-content">

        <div className="page-content">
        <div className="container-fluid">
        <div>
            <h3 className='text-center'>Want to Add New Category!?</h3>
            <form>
                                    <div className="form-group">
                                      <label for="exampleFormControlInput1">Select Your Category item</label>
                                        
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Flower</option>
                                            <option value="1">Cat</option>
                                            <option value="2">Dog</option>
                                        </select>
                                        <label for="exampleFormControlInput1">Want to Visible or Hidden?</label>
                                        <select name="" id=""   className="form-select" aria-label="Default select example">
                                        <option name="" id="">Visible</option>
                                        <option name="" id="">Hidden</option>
                                        </select>
                                    </div>
                                      <button 
                                      type="submit" className="btn btn-primary mt-2"
                                      >
                                           Submit New Category
                                      </button>
                                  </form>
        </div>
        </div>
        </div>
        </div>
    );
};

export default CateGory;