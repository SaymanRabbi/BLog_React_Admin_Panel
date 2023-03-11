import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SidebarMaenu = () => {
    const [onhover,setOnhover] = useState(false)
    const [auth,setAuth] = useState(false)
    const [post,setPost] = useState(false)
    const [category,setCategory] = useState(false)
    return (
        <>
        <div class="app-menu navbar-menu">
           
            <div class="navbar-brand-box">
               
                <Link to='/' class="logo logo-dark">
                    <span class="logo-sm">
                        <img src="../../images/logo-sm.png" alt="" height="22"/>
                    </span>
                    <Link to='/' class="logo-lg">
                        <img src="../../images/logo-dark.png" alt="" height="17"/>
                    </Link>
                </Link>
               
                <Link to='/' class="logo logo-light">
                    <span class="logo-sm">
                        <img src="../../images/logo-sm.png" alt="" height="22"/>
                    </span>
                    <span class="logo-lg">
                        <img src="../../images/logo-light.png" alt="" height="17"/>
                    </span>
                </Link>
                <button type="button" class="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
                    <i class="ri-record-circle-line"></i>
                </button>
            </div>

            <div id="scrollbar" data-simplebar="init" class="h-100"><div class="simplebar-wrapper" style={{margin:" 0px"}}><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style={{right: "0px", bottom:" 0px"}}><div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style={{height: "100%", overflow:" hidden scroll"}}><div class="simplebar-content" style={{padding: "0px"}}>
                <div class="container-fluid">

                    <div id="two-column-menu">
                    </div>
                    <ul class="navbar-nav" id="navbar-nav" data-simplebar="init"><div class="simplebar-wrapper" style={{margin: "0px"}}><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style={{right: "0px",bottom: "0px"}}><div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style={{height: "auto", overflow: "hidden"}}><div class="simplebar-content" style={{padding: "0px"}}>
                        <li class="menu-title"><span data-key="t-menu">Menu</span></li>
                        <li class="nav-item">
                            <Link to='/' class="nav-link menu-link" href="#sidebarDashboards" role="button" aria-expanded="false" aria-controls="sidebarDashboards">
                                 <span data-key="t-dashboards">Dashboards</span>
                            </Link>
                        </li> 

                        <li class="menu-title"><i class="ri-more-fill"></i> <span data-key="t-pages">Pages</span></li>

                        <li class="nav-item">
                            <a onClick={()=>setAuth(!auth)} class={`nav-link menu-link ${!auth ? 'collapsed' :''}`} href="#sidebarAuth" data-bs-toggle="collapse" role="button" aria-expanded={`${!auth ? false : true}`} aria-controls="sidebarAuth">
                                <i class="lar la-user-circle"></i> <span data-key="t-authentication">Authentication</span>
                            </a>
                            <div class={`collapse menu-dropdown ${!auth ? null: 'show'}`} id="sidebarAuth">
                                <ul class="nav nav-sm flex-column">
                                    <li class="nav-item">
                                        <Link to='/login' class="nav-link" role="button" aria-expanded="false" aria-controls="sidebarSignIn" data-key="t-signin"> Sign In   
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-title"><i class="ri-more-fill"></i> <span data-key="t-components">Create New Blog</span></li>

                        <li class="nav-item">
                            <Link to='/post' onClick={()=>setPost(!post)} class={`nav-link menu-link ${!post ? "collapsed": null}`} href="#postAuth" data-bs-toggle="collapse" role="button" aria-expanded={`${!post? false:true}`} aria-controls="postAuth">
                                <i class="lar la-user-circle"></i> <span data-key="t-authentication">Post</span>
                            </Link>
                            <div class={`collapse menu-dropdown ${!post?null:"show"}`} id="postAuth">
                                <ul class="nav nav-sm flex-column">
                                    <li class="nav-item">
                                        <Link to='/posttable' class="nav-link"> Post Table
                                        </Link>
                                    </li>                                 
                                </ul>
                            </div>
                        </li>

                        <li class="nav-item">
                            <Link class={`nav-link menu-link ${!category? "collapsed": null}`} onClick={()=>setCategory(!category)} to='/category' data-bs-toggle="collapse" role="button" aria-expanded={`${!category ? false : true }`} aria-controls="categoryAuth">
                                <i class="lar la-user-circle"></i> <span data-key="t-authentication">Category</span>
                            </Link>
                            <div class={`collapse menu-dropdown ${category ? 'show':null }`} id="categoryAuth">
                                <ul class="nav nav-sm flex-column">
                                    <li class="nav-item">
                                        <Link to='/categorytable' class="nav-link"> Category Table
                                        </Link>
                                    </li>             
                                </ul>
                            </div>
                        </li>

                    </div></div></div></div><div class="simplebar-placeholder" style={{width: "auto",height:" 440px"}}></div></div><div class="simplebar-track simplebar-horizontal" style={{visibility: "hidden"}}><div class="simplebar-scrollbar" style={{width: "0px",display: "none",transform: "translate3d(0px, 0px, 0px)"}}></div></div><div class="simplebar-track simplebar-vertical" style={{visibility: "hidden"}}><div class="simplebar-scrollbar" style={{height: "0px", display: "none"}}></div></div></ul>
                </div>
                
            </div></div></div></div><div class="simplebar-placeholder" style={{width: "auto",height: "296px"}}></div></div><div class="simplebar-track simplebar-horizontal" style={{visibility: "hidden"}}><div class="simplebar-scrollbar" style={{width: "0px", transform: "translate3d(0px, 0px, 0px)", display: "none"}}></div></div><div class="simplebar-track simplebar-vertical" style={{visibility: "visible"}}><div class="simplebar-scrollbar" style={{height: "25px",display: "block",transform: "translate3d(0px, 0px, 0px)"}}></div></div></div>

            <div class="sidebar-background"></div>
        </div>
        <div class="vertical-overlay"></div>
        </>
    );
};

export default SidebarMaenu;