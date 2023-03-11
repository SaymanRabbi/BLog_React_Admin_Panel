import React from 'react';

const CateGoryTable = () => {
    return (
        <div>
        {/* <Topnavbar/>
        <SidebarMaenu/> */}
        <div class="main-content">
    <div class="page-content">
    <div class="container-fluid">
   <div className='d-flex'>
    <div style={{flex:'1'}}>
        Sort Your Category
    </div>
   <select style={{flex:'1'}} class="form-select" aria-label="Default select example">
        <option selected>Fillter</option>
        <option value="1">Cat</option>
        <option value="2">Flower</option>
        <option value="3">Dog</option>
    </select>  
   </div>
    <table class="table table-striped">
<thead>
<tr>
  <th scope="col">Number Of Category</th>
  <th scope="col">Tittle</th>
  <th scope="col">Edit Category</th>
</tr>
</thead>
<tbody>
<tr>
    <td scope="row">1</td>
    <td>Flower</td>
    <td className='d-flex gap-3'>
    <button className='btn btn-secondary btn-sm'>Edit</button>
    <button className='btn btn-danger btn-sm'>Delete</button>
    </td>
</tr>
<tr>
    <td scope="row">1</td>
    <td>cat</td>
    <td className='d-flex gap-3'>
    <button className='btn btn-secondary btn-sm'>Edit</button>
    <button className='btn btn-danger btn-sm'>Delete</button>
    </td>
</tr>
<tr>
    <td scope="row">1</td>
    <td>Dog</td>
    <td className='d-flex gap-3'>
    <button className='btn btn-secondary btn-sm'>Edit</button>
    <button className='btn btn-danger btn-sm'>Delete</button>
    </td>
</tr>
</tbody>
</table>
    </div>
    </div>
    </div>
    </div>
    );
};

export default CateGoryTable;