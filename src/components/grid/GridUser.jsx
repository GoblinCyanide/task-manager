import React, { useEffect, useState } from "react";
import "./Grid.css";
import CardUser from "../card/CardUser";
import HeaderCard from "../headerCard/HeaderCard";

const Grid = ({ order }) => {
    const [data, setData] = useState([]);
    const reduce = (title) => {
        let s = "";
        if (title.length > 30) {
            s = title.slice(0, 30);
            s += "...";
        }
        else {
            s = title;
        }
        return s;
    }

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const items = data?.tickets;
    const names = data?.users;
    const dictionary = new Map();
    names?.forEach((name) => {
        dictionary.set(name?.id, name?.name);
    });

    const dictionary1 = new Map();
    names?.forEach((name) => {
        dictionary1.set(name?.id, name?.available);
    });

    const uniqueStatusValues = [...new Set(items?.map(ticket => ticket.userId))];

    const values = (status) => {
        const filteredData = items && items.filter(item => item.userId === status);
        if (order === 'priority') {
            const filteredData1 = filteredData && filteredData.sort((a, b) => b.priority - a.priority);
            return filteredData1;
        }
        else {
            const filteredData1 = filteredData && filteredData.sort((a, b) => a.title.localeCompare(b.title));
            return filteredData1;
        }

    }
    return (
        <div className="grid-container" style={{ gridTemplateColumns: `repeat(${uniqueStatusValues.length}, 1fr)` }}>
            {uniqueStatusValues?.map((cat) => (
                <div className="grid-item">
                    <HeaderCard text = {dictionary.get(cat)} length = {values(cat)?.length} />
                    {values(cat)?.map((item) => (
                        <CardUser id={item.id} title={reduce(item.title)} tag={item.tag} status={item.status} />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Grid;



