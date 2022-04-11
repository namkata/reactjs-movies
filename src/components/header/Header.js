import "./Header.scss";
import React, {useEffect, useRef} from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
const HeaderNavigate=[
    {
        name:"Movies",
        link:"/",
        // icon:"home"
    },
    {
        name:"TV Shows",
        link:"/tv",
        // icon:"info"
    },
    {
        name:"Trainer",
        link:"/trainers",
        // icon:"phone"
    }
];
function Header(){
    const {pathname} = useLocation();
    const headerRef = useRef(null);

    const active = HeaderNavigate.findIndex(item=>item.path===pathname);

    useEffect(()=>{
        const shrinkHeader = ()=> {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add("shrink");
            } else {
                headerRef.current.classList.remove("shrink");
            }
        }
        window.addEventListener("scroll", shrinkHeader);
        return () => {
            window.removeEventListener("scroll", shrinkHeader);
        };

    },[])
    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt=""/>
                    <Link to="/">Kho Phim</Link>
                </div>
                <ul className="header__nav">
                    {
                        HeaderNavigate.map((item,index)=>{
                            return (
                                <li key={index} className={`header__nav-item ${active===index?"active":""}`}>
                                    <Link to={item.link}>
                                        {/*<i className={`iconfont icon-${item.icon}`}></i>*/}
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
export default Header;