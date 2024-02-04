import Rectangle13 from "../../public/images/imgLocation/Rectangle13.png"
import Rectangle10 from "../../public/images/imgLocation/Rectangle10.png"
import Rectangle12 from "../../public/images/imgLocation/Rectangle12.png"

export const navbar = [
    {
        id: 0,
        name: "HOME",
        href: "/",
        agent: false,
    },

    {
        id: 1,
        name: "PROPERTIES",
        href: "/properties",
        agent: false,
    },

    {
        id: 2,
        name: "BLOG",
        href: "/blog",
        agent: false,
    },

]
export const activeUser = [
    {
        id: 0,
        name: "Persional",
        href: "/properties",
        role: "All",
    },

    {
        id: 1,
        name: "IsAgent",
        href: "/properties",
        role: "AGENT",
    },

    {
        id: 2,
        name: "Admin",
        href: "/admin",
        role: "ADMIN",
    },

]


export const locationTop = [{
    name: " Can Tho",
    img: Rectangle13
},
{
    name: "TPHCM",
    img: Rectangle10
},
{
    name: "Da Nang",
    img: Rectangle12
}

]


export const footerItem = [{
    id: "1",
    title: "Features",
    item: [{
        name: "Home",
        link: "/"
    },
    {
        name: "Blog",
        link: "/blog"
    },
    {
        name: "Contact",
        link: "/contact"
    },
    ]
}
    ,
{
    id: "2",
    title: "Company",
    item: [{
        name: "Home",
        link: "/"
    },
    {
        name: "Blog",
        link: "/blog"
    },
    {
        name: "Contact",
        link: "/contact"
    },
    ]
},
{
    id: "3",
    title: "Team and policies",
    item: [{
        name: "Terms of servies",
        link: "/"
    },
    {
        name: "Privacy Policy",
        link: "/"
    },
    {
        name: "Security",
        link: "/"
    },
    ]
}
]
export const optiionSort = [{
    id: 1,
    name: "News",
    value: "name"
},
{
    id: 2,
    name: "Oldest",
    value: "-name"
},
]

export const optionFilterProperty = [
    {
        id: 1,
        name: "All Properties",
        value: ""
    },
    {
        id: 2,
        name: "For Buy",
        value: ""
    },
    {
        id: 3,
        name: "For Sale",
        value: ""
    },
    {
        id: 4,
        name: "For Rent",
        value: ""
    }
]

