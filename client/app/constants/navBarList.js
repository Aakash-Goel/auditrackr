// nav icons
import dashboardIcon from '../static/icons/dashboard.svg?sprite'; // eslint-disable-line import/no-unresolved
import auditIcon from '../static/icons/audit.svg?sprite'; // eslint-disable-line import/no-unresolved
import reportIcon from '../static/icons/report.svg?sprite'; // eslint-disable-line import/no-unresolved
import taskIcon from '../static/icons/task.svg?sprite'; // eslint-disable-line import/no-unresolved
import connectionIcon from '../static/icons/connection.svg?sprite'; // eslint-disable-line import/no-unresolved
import activityIcon from '../static/icons/activity.svg?sprite'; // eslint-disable-line import/no-unresolved

const pages = [
  {
    title: 'Browse',
    isSubHeader: true,
  },
  {
    title: 'Dashboard',
    pathUrl: '/account/audit/dashboard',
    icon: dashboardIcon,
  },
  {
    title: 'Audits',
    pathUrl: '/account/audit/create',
    icon: auditIcon,
  },
  {
    title: 'Reports',
    pathUrl: '/reports',
    icon: reportIcon,
  },
  {
    title: 'Tasks',
    pathUrl: '/tasks',
    icon: taskIcon,
  },
  {
    title: 'Connections',
    pathUrl: '/connections',
    icon: connectionIcon,
  },
  {
    title: 'Activities',
    pathUrl: '/activities',
    icon: activityIcon,
  },
  {
    title: 'More',
    isSubHeader: true,
  },
  {
    title: 'Help Center',
    pathUrl: '/help',
    // iconType: 'nav-help',
  },
  {
    title: 'Cookies',
    pathUrl: '/cookies',
    // iconType: 'nav-cookie',
  },
  {
    title: 'About Us',
    pathUrl: '/about',
    // iconType: 'nav-about',
  },
  {
    title: 'Contact Us',
    pathUrl: '/contact',
    // iconType: 'nav-contact',
  },
  {
    title: 'Privacy Policy',
    pathUrl: '/privacy',
    // iconType: 'nav-privacy',
  },
  {
    title: 'Terms & Conditions',
    pathUrl: '/tos',
    // iconType: 'nav-tnc',
  },
];

export default pages;
