import React from 'react'

interface Props {
    id: string;
    title: string;
    remove: () => void;
}

export const ListItem: React.FC<Props> = ({id, title, remove}) => {
    return (
        <div className="item">
            <a href={`/${id}`}>
                <div className="text">{title}</div>
            </a>
            <div className="icons">
                <a href={`/update/${id}`}>
                    <i className="ri-pencil-fill"></i>
                </a>
                <i className="ri-delete-bin-7-fill" onClick={remove}></i>
            </div>
        </div>
    )
}