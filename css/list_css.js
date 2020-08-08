const List_css = () => {
    return (
        <style global jsx>{`
            .table-board {
                font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
                border-collapse: collapse;
                width: 100%;
            }
            .table-board td,
            .table-board th {
                border: 1px solid #ddd;
                padding: 8px;
            }
            .table-board tr:nth-child(even) {
                background-color: #f2f2f2;
            }
            .table-board tr:hover {
                background-color: #ddd;
            }
            .table-board th {
                padding-top: 12px;
                padding-bottom: 12px;
                text-align: left;
                background-color: #4caf50;
                color: white;
            }
        `}</style>
    );
};

export default List_css;
