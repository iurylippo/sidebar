import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';

const menuItems = [
    {
        name: 'Home',
        to: '/',
        icon: <BsIcons.BsFillHouseFill />,
        subMenuItems: [],
    },
    {
        name: 'About',
        to: '/about',
        icon: <BsIcons.BsInfoCircleFill />,
        subMenuItems: [],
    },
    {
        name: 'Destination',
        to: '/destination',
        icon: <BsIcons.BsCursorFill />,
        subMenuItems: [
            {
                mame: 'Canada',
                to: '/canada',
            },
            {
                mame: 'Brasil',
                to: '/brasil',
            },
            {
                mame: 'India',
                to: '/india',
            },
            {
                mame: 'Australia',
                to: '/australia',
            },
        ],
    },
    {
        name: 'Blog',
        to: '/blog',
        icon: <FaIcons.FaBloggerB />,
        subMenuItems: [],
    },
    {
        name: 'Services',
        to: '/services',
        icon: <BsIcons.BsFillGearFill />,
        subMenuItems: [],
    },
    {
        name: 'Contacts',
        to: '/contacts',
        icon: <BsIcons.BsFillPersonLinesFill />,
        subMenuItems: [],
    },
];

export default menuItems;
