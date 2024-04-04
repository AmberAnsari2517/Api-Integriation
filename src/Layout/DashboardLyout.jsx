import React from 'react';
import { styled } from "@mui/material";
import { Outlet, Navigate } from 'react-router-dom'; // Import Navigate from react-router-dom
import { Pagelyout } from '../pages/Drwer';
import { isNotAuthenticated } from './Atuth';

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const StyledRoot = styled('div')({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden',
});

const Main = styled('div')(({ theme }) => ({
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
    paddingTop: APP_BAR_MOBILE + 24,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
        paddingTop: APP_BAR_DESKTOP + 24,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
}));

export const DashboardLyout = () => {
    const auth = !isNotAuthenticated(); // Assuming isNotAuthenticated() returns true if not authenticated

    return (
        <StyledRoot>
            <Pagelyout />
            <Main>
                {auth ? <Outlet /> : <Navigate to="/" />} {/* Use Navigate component */}
            </Main>
        </StyledRoot>
    );
};
