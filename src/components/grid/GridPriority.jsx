import React, { useEffect, useState } from "react";
import "./Grid.css";
import CardPriority from "../card/CardPriority";
import HeaderCard from "../headerCard/HeaderCard";

const Grid = ( {order} ) => {
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

    const Change = (value) => {
        if (value === 4) return "Urgent";


        if (value === 3) return "High";


        if (value === 2) return "Medium";


        if (value === 1) return "Low";


        if (value === 0) return "No priority";
    }

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
    const uniqueStatusValues = [0, 1, 2, 3, 4]

    const values = (status) => {
        const filteredData = items && items.filter(item => item.priority === status);
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
                    <HeaderCard text = {Change(cat)} length = {values(cat)?.length?values(cat).length:0 } />
                    {values(cat)?.map((item) => (
                        <CardPriority id={item.id} title={reduce(item.title)} tag={item.tag} status={item.status} />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Grid;



