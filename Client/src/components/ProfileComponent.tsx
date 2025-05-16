import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import PersonalInfo from './my profile/PersonalInfo';
import React from 'react';

//

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import PersonIcon from '@mui/icons-material/Person';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
//

function ProfileComponent() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (
        _event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number
    ) => {
        setSelectedIndex(index);
    };

    const renderContent = () => {
        switch (selectedIndex) {
            case 0:
                return <PersonalInfo />;
            case 1:
                return <div>Order</div>;
            case 2:
                return <div>History</div>;
            case 3:
                return <div>favorite</div>;
            case 4:
                return <div>Notifications</div>;
            case 5:
                return <div>Settings</div>;
            default:
                return <div>Choose anoher from the menu</div>;
        }
    };

    return (
        <section
            data-scroll-section
            className="h-[100vh] w-[100vw] flex flex-col items-center"
        >
            <Navbar />

            <div className="h-[75vh] w-full mt-[56px] flex flex-row justify-center">
                <div className=" w-[15vw] h-[100%] bg-[#232628] flex flex-col rounded-s-4xl  mr-[-100px]">
                    <ol className="flex flex-col  pt-[40%] w-[10vw] text-[0.9vw] ">
                        <li>
                            <ListItemButton
                                selected={selectedIndex === 0}
                                onClick={(event) =>
                                    handleListItemClick(event, 0)
                                }
                            >
                                <ListItemIcon>
                                    <PersonIcon
                                        sx={{
                                            color: 'white',
                                            fontSize: 'large'
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText primary="Profile" />
                            </ListItemButton>
                        </li>
                        <li>
                            <ListItemButton
                                selected={selectedIndex === 1}
                                onClick={(event) =>
                                    handleListItemClick(event, 1)
                                }
                            >
                                <ListItemIcon>
                                    <LocalGroceryStoreIcon
                                        sx={{
                                            color: 'white',
                                            fontSize: 'large'
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText primary="Orders" />
                            </ListItemButton>
                        </li>
                        <li>
                            <ListItemButton
                                selected={selectedIndex === 2}
                                onClick={(event) =>
                                    handleListItemClick(event, 2)
                                }
                            >
                                <ListItemIcon>
                                    <WorkHistoryIcon
                                        sx={{
                                            color: 'white',
                                            fontSize: 'large'
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText primary="History" />
                            </ListItemButton>
                        </li>
                        <li>
                            <ListItemButton
                                selected={selectedIndex === 3}
                                onClick={(event) =>
                                    handleListItemClick(event, 3)
                                }
                            >
                                <ListItemIcon>
                                    <FavoriteIcon
                                        sx={{
                                            color: 'white',
                                            fontSize: 'large'
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText primary="Favorite" />
                            </ListItemButton>
                        </li>
                        <li>
                            <ListItemButton
                                selected={selectedIndex === 4}
                                onClick={(event) =>
                                    handleListItemClick(event, 4)
                                }
                            >
                                <ListItemIcon>
                                    <NotificationsIcon
                                        sx={{
                                            color: 'white',
                                            fontSize: 'large'
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText primary="Notifications" />
                            </ListItemButton>
                        </li>
                    </ol>
                    <ol className="flex flex-col  pt-[160px] w-[10vw] ">
                        <li>
                            <ListItemButton
                                selected={selectedIndex === 5}
                                onClick={(event) =>
                                    handleListItemClick(event, 5)
                                }
                            >
                                <ListItemIcon>
                                    <SettingsIcon
                                        sx={{
                                            color: 'white',
                                            fontSize: 'large'
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText primary="Settings" />
                            </ListItemButton>
                        </li>
                        <li>
                            <ListItemButton
                                selected={selectedIndex === 6}
                                onClick={(event) => {
                                    handleListItemClick(event, 6);
                                    handleLogout();
                                }}
                            >
                                <ListItemIcon>
                                    <LogoutIcon
                                        sx={{
                                            color: 'white',
                                            fontSize: 'large'
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText primary="Log out" />
                            </ListItemButton>
                        </li>
                    </ol>
                </div>
                <div className="w-[50vw] bg-[white] rounded-e-4xl z-10 flex flex-col">
                    {renderContent()}
                </div>
            </div>
        </section>
    );
}

export default ProfileComponent;
