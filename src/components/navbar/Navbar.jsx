import React, { useRef, useState, useEffect } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = ( {setGroup, setOrder} ) => {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

    const handleMenu = (e) => {
        e.stopPropagation();
        setShowMenu((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="navbar">
                <div className="display" onClick={handleMenu}>
                    <div className="main-display">
                        <FontAwesomeIcon icon={faSliders} style={{ color: "#363a3f" }} />

                        <div className="text">Display</div>
                        <FontAwesomeIcon icon={faChevronDown} style={{ color: "#6a717c" }} />

                    </div>
                </div>
            </div>
            {showMenu && (
                <div className="menu" ref={menuRef}>
                    <div className="element">
                        <span className="category">Grouping</span>
                        <select className="select" onChange={e => setGroup(e.target.value)}>
                            <option id="status" value="status">Status</option>
                            <option id="User" value="user">User</option>
                            <option id="priority" value="priority">Priority</option>
                        </select>
                    </div>
                    <div className="element">
                        <span className="category">Ordering</span>
                        <select className="select" onChange={e => setOrder(e.target.value)}>
                            <option id="priority" value="priority">Priority</option>
                            <option id="title" value = "title">Title</option>
                        </select>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
