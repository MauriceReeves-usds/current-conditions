import React from "react";

export const DateFooter = ({ date }: {date: Date}) => {
    return (
        <span className="current-conditions-date">{ date.toLocaleDateString() }</span>
    )
}