import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo';
import { useAuth } from '../../context/AuthContext';

import Products from './Products';
import Users from './Users';
import Orders from './Orders';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import StoreIcon from '@mui/icons-material/Store';
import GroupIcon from '@mui/icons-material/Group';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';

function AdminDashboardLayout() {
    const navigate = useNavigate();
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const { logout } = useAuth();
    const handleLogout = () => {
        logout();

        navigate('/');
    };

    const handleListItemClick = (_event: unknown, index: number) => {
        setSelectedIndex(index);
    };

    const renderContent = () => {
        switch (selectedIndex) {
            case 0:
                return <Products />;
            case 1:
                return <Users />;
            case 2:
                return <Orders />;
            case 3:
                return <div>Inställningar</div>;
            default:
                return <div>Välj en sektion i menyn</div>;
        }
    };

    return (
        <section className="h-[100vh] w-[100vw] flex flex-col items-center">
            <div className="h-[100vh] w-full  flex flex-row justify-center">
                {/* SIDOMENY */}
                <div className="w-[17vw] h%-full bg-[#1f1f1f] flex flex-col  text-white">
                    <div className="pt-[15%]">
                        <Logo />
                    </div>

                    <ol className="flex flex-col pt-15 w-full text-sm">
                        <li>
                            <ListItemButton
                                selected={selectedIndex === 0}
                                onClick={(e) => handleListItemClick(e, 0)}
                            >
                                <ListItemIcon>
                                    <StoreIcon
                                        sx={{
                                            color: 'white',
                                            fontSize: 'large',
                                            marginTop: {
                                                xs: '10px',
                                                md: '0'
                                            }
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Products"
                                    sx={{
                                        display: {
                                            xs: 'none',

                                            md: 'block'
                                        }
                                    }}
                                />
                            </ListItemButton>
                        </li>
                        <li>
                            <ListItemButton
                                selected={selectedIndex === 1}
                                onClick={(e) => handleListItemClick(e, 1)}
                            >
                                <ListItemIcon>
                                    <GroupIcon
                                        sx={{
                                            color: 'white',
                                            fontSize: 'large',
                                            marginTop: {
                                                xs: '10px',
                                                md: '0'
                                            }
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Users"
                                    sx={{
                                        display: {
                                            xs: 'none',

                                            md: 'block'
                                        }
                                    }}
                                />
                            </ListItemButton>
                        </li>
                        <li>
                            <ListItemButton
                                selected={selectedIndex === 2}
                                onClick={(e) => handleListItemClick(e, 2)}
                            >
                                <ListItemIcon>
                                    <ShoppingCartIcon
                                        sx={{
                                            color: 'white',
                                            fontSize: 'large',
                                            marginTop: {
                                                xs: '10px',
                                                md: '0'
                                            }
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Orders"
                                    sx={{
                                        display: {
                                            xs: 'none',

                                            md: 'block'
                                        }
                                    }}
                                />
                            </ListItemButton>
                        </li>
                        <li>
                            <ListItemButton
                                selected={selectedIndex === 3}
                                onClick={(e) => handleListItemClick(e, 3)}
                            >
                                <ListItemIcon>
                                    <SettingsIcon
                                        sx={{
                                            color: 'white',
                                            fontSize: 'large',
                                            marginTop: {
                                                xs: '10px',
                                                md: '0'
                                            }
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Settings"
                                    sx={{
                                        display: {
                                            xs: 'none',

                                            md: 'block'
                                        }
                                    }}
                                />
                            </ListItemButton>
                        </li>
                    </ol>
                    <div className="mt-auto pb-6">
                        <ListItemButton onClick={handleLogout}>
                            <ListItemIcon>
                                <LogoutIcon
                                    sx={{
                                        color: 'white',
                                        fontSize: 'large',
                                        marginTop: {
                                            xs: '10px',
                                            md: '0'
                                        }
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary="Logga ut"
                                sx={{
                                    display: {
                                        xs: 'none',

                                        md: 'block'
                                    }
                                }}
                            />
                        </ListItemButton>
                    </div>
                </div>

                {/* INNEHÅLL */}
                <div className="w-[100vw] bg-[white]  p-6 overflow-y-auto">
                    {renderContent()}
                </div>
            </div>
        </section>
    );
}

export default AdminDashboardLayout;
