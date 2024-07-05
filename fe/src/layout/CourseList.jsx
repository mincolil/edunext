//import all necessary modules
import React from 'react';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './CourseList.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AssignmentIcon from '@mui/icons-material/Assignment';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';


const useStyles = makeStyles({
    root: {
        padding: 20,
    },
    header: {
        marginBottom: 20,
    },
    courseInfo: {
        marginBottom: 20,
    },
    courseDetails: {
        marginBottom: 20,
    },
    button: {
        marginTop: 20,
    },
});


export default function CourseList() {

    return (
        <div>
            <div className="wrapper">
                <aside style={{ width: '250px', float: 'left' }} className="aside-menu">
                    <div className="side-menu">
                        <nav>
                            <ul className="ul-side-menu" style={{ padding: '0px' }}>
                                <div style={{ textAlign: 'center', width: '100%' }}>
                                    <a style={{ textDecoration: 'underline' }}>
                                        <img src="https://edunext.fpt.edu.vn/assets/logo-home-Djb_K2V0.png" style={{ width: '100%' }}></img>
                                    </a>
                                </div>
                                <li>
                                    <a href="#">
                                        <span>
                                            <div className='logo-side-menu' style={{ textAlign: 'center', fontSize: '0.625rem' }}>
                                                <AccountCircleIcon style={{ fontSize: '1.5rem' }} />
                                            </div>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>
                                            <div className='logo-side-menu' style={{ textAlign: 'center', fontSize: '0.625rem' }}>
                                                <HomeOutlinedIcon style={{ fontSize: '1.5rem' }} />
                                            </div>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>
                                            <div className='logo-side-menu' style={{ textAlign: 'center', fontSize: '0.625rem' }}>
                                                <AssignmentIcon style={{ fontSize: '1.5rem' }} />
                                            </div>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>
                                            <div className='logo-side-menu' style={{ textAlign: 'center', fontSize: '0.625rem' }}>
                                                <UpcomingIcon style={{ fontSize: '1.5rem' }} />
                                            </div>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>
                                            <div className='logo-side-menu' style={{ textAlign: 'center', fontSize: '0.625rem' }}>
                                                <PictureAsPdfIcon style={{ fontSize: '1.5rem' }} />
                                            </div>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>
                                            <div className='logo-side-menu' style={{ textAlign: 'center', fontSize: '0.625rem' }}>
                                                <SupportAgentIcon style={{ fontSize: '1.5rem' }} />
                                            </div>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>
                                            <div className='logo-side-menu' style={{ textAlign: 'center', fontSize: '0.625rem' }}>
                                                <LiveHelpIcon style={{ fontSize: '1.5rem' }} />
                                            </div>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>

                <div className="main-content">
                </div>
            </div >
        </div>

    )
};