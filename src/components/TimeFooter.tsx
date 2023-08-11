import React from "react";

export const TimeFooter = ({date}: {date: Date}) => {
    return (
        <span className="current-conditions-time">{ date.toLocaleTimeString() }</span>
    )
}