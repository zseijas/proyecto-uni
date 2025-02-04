import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: '',
        items: ['dashboard'],
    },
    {
        text: '',
        // items: ['layouts', 'pages'],
        items: [],
    },
    {
        text: '',
        items: [ 'users', 'personalInfo', 'payments', 'claims', 'charts',],
        // items: [ 'tables', 'payments', 'claims', 'charts',],
    },
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Panel',
        link: '/dashboard',
    },
    layouts: {
        icon: 'columns',
        text: 'Layouts',
        submenu: [
            {
                text: 'Static Navigation',
                link: '/dashboard/static',
            },
            {
                text: 'Light Sidenav',
                link: '/dashboard/light',
            },
        ],
    },
    pages: {
        icon: 'book-open',
        text: 'Pages',
        submenu: [
            {
                text: 'Authentication',
                submenu: [
                    {
                        text: 'Login',
                        link: '/auth/login',
                    },
                    {
                        text: 'Register',
                        link: '/auth/register',
                    },
                    {
                        text: 'Forgot Password',
                        link: '/auth/forgot-password',
                    },
                ],
            },
            {
                text: 'Error',
                submenu: [
                    {
                        text: '401 Page',
                        link: '/error/401',
                    },
                    {
                        text: '404 Page',
                        link: '/error/404',
                    },
                    {
                        text: '500 Page',
                        link: '/error/500',
                    },
                ],
            },
        ],
    },
    tables: {
        icon: 'table',
        text: 'Tables',
        link: '/tables',
    },
    users: {
        icon: 'user',
        text: 'Usuarios',
        link: '/users',
    },
    personalInfo: {
        icon: 'user',
        text: 'Mis Datos',
        link: '/tables',
    },
    payments: {
        icon: 'credit-card',
        text: 'Pagos',
        link: '/tables',
    },
    claims: {
        icon: 'exclamation-circle',
        text: 'Reclamos',
        link: '/claims',
    },
    charts: {
        icon: 'chart-area',
        text: 'Reportes',
        link: '/charts',
    },
};
