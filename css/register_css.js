const Register_css = () => {
    return (
        <style global jsx>{`
            .register-wrapper {
                border-radius: 5px;
                background-color: #f2f2f2;
                padding: 20px;
            }
            .register-wrapper input[type="text"],
            input[type="password"] {
                width: 100%;
                padding: 12px 20px;
                margin: 8px 0;
                display: inline-block;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-sizing: border-box;
            }
            .register-wrapper input[type="button"] {
                width: 100%;
                background-color: #4caf50;
                color: white;
                padding: 14px 20px;
                margin: 8px 0;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }
            .register-wrapper input[type="button"]:hover {
                background-color: #45a049;
            }
        `}</style>
    );
};

export default Register_css;
