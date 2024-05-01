import { javascript, html, css, tailwind, python, reactimg, sass, antd, firebase  } from "../assets/icons"
import {streamvibe, nnra_circle, datagridder} from '../assets/projects'

export const projectList = [
    {
        title: 'OTT StreamVibe',
        description: 'Movie Streaming Platform Website',
        year: '2023',
        image: streamvibe,
        live: 'https://bee-ott.vercel.app',
        github: '#',
        technologies: [
            'React js',
            'Tailwind', 
            'Ant design',
            'Framer motion',
        ],
        links:[
            {
                'name': 'Github',
                'link': '#',
            },      
        ]
    },
    {
        title: 'NNRA digital network',
        description: 'Collaboration software for the Nigerian Nuclear Regulatory Authority',
        year: '2023',
        image: nnra_circle,
        live: 'https://codebee.pythonanywhere.com',
        github: null,
        technologies: [
            'React js',
            'Tailwind', 
            'Ant design',
        ],
        links:[
            {
                'name': 'Github',
                'link': '#',
            },
        ]
    },
    {
        title: 'Data gridder',
        description: 'Data collection and orgarnisation software',
        year: '2023',
        image: datagridder,
        live: '#',
        github: '#',
        technologies: [
            'React js',
            'Tailwind', 
            'Ant design',
        ],
        links:[
            {
                'name': 'Github',
                'link': '#',
            },
        ]
    },
]

export const navLinks = [
    {href: '#home', label: 'Home'},
    {href: '#about', label: 'About'},
    {href: '#projects', label: 'Projects'},
    {href: '#contact', label: 'Contact'},
]

export const technologies =[
    {
        'label': 'Python Django',
        'image': python,
        'link': ''
    },
    {
        'label': 'React Js',
        'image': reactimg,
        'link': ''
    },
    {
        'label': 'Tailwind css',
        'image': tailwind,
        'link': ''
    },
    {
        'label': 'Ant design',
        'image': antd,
        'link': ''
    },
    {
        'label': 'Firebase',
        'image': firebase,
        'link': ''
    },
    {
        'label': 'JavaScript',
        'image': javascript,
        'link': ''
    },
    {
        'label': 'Scss',
        'image': sass,
        'link': ''
    },
    {
        'label': 'HTML 5',
        'image': html,
        'link': ''
    },
    {
        'label': 'CSS 3',
        'image': css,
        'link': ''
    },


]