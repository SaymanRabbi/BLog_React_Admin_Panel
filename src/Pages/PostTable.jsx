import React from 'react';
import SidebarMaenu from '../Components/Header/SidebarMaenu';
import Topnavbar from '../Components/Header/Topnavbar';

const PostTable = () => {
    return (
        <div>
            {/* <Topnavbar/>
            <SidebarMaenu/> */}
            <div className="main-content">
        <div className="page-content">
        <div className="container-fluid">
       <div className='d-flex'>
        <div style={{flex:'1'}}>
            Sort Your Post
        </div>
       <select style={{flex:'1'}} className="form-select" aria-label="Default select example">
            <option selected>Fillter</option>
            <option value="1">Id</option>
            <option value="2">Most View</option>
            <option value="3">Tittle</option>
        </select>  
       </div>
        <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Number</th>
      <th scope="col">Tittle</th>
      <th scope="col">View</th>
      <th scope="col">Edit Post</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td scope="row">1</td>
        <td>This is test Post</td>
        <td>2000+</td>
        <td className='d-flex gap-3'>
    <button className='btn btn-secondary btn-sm'>Edit</button>
    <button className='btn btn-danger btn-sm'>Delete</button>
    </td>
    </tr>
    <tr>
        <td scope="row">1</td>
        <td>This is test Post</td>
        <td>2000+</td>
        <td className='d-flex gap-3'>
    <button className='btn btn-secondary btn-sm'>Edit</button>
    <button className='btn btn-danger btn-sm'>Delete</button>
    </td>
    </tr>
    <tr>
        <td scope="row">1</td>
        <td>This is test Post</td>
        <td>2000+</td>
        <td className='d-flex gap-3'>
    <button className='btn btn-secondary btn-sm'>Edit</button>
    <button className='btn btn-danger btn-sm'>Delete</button>
    </td>
    </tr>
    <tr>
        <td scope="row">1</td>
        <td>This is test Post</td>
        <td>2000+</td>
        <td className='d-flex gap-3'>
    <button className='btn btn-secondary btn-sm'>Edit</button>
    <button className='btn btn-danger btn-sm'>Delete</button>
    </td>
    </tr>
    <tr>
        <td scope="row">1</td>
        <td>This is test Post</td>
        <td>2000+</td>
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

export default PostTable;