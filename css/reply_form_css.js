const Reply_form_css = () => {
    return (
        <style global jsx>{`
            .reply-form {
                right: 15px;
                border: 3px solid rgba(0, 0, 0, 0.4);
                z-index: 9;
            }
            .reply-form .reply-input-box {
                max-width: 15%;
                padding: 1%;
                background-color: white;
            }
            .reply-form textarea {
                height: 100%;
                width: 620%;
                padding: 15px;
                margin: 5px 0 0 0;
                border: none;
                background: rgba(0, 0, 0, 0.4);
            }
            .reply-form input[type="button"] {
                background-color: black;
                border: none;
                color: white;
                padding: 0.7% 1%;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 0 0 15px 15px;
                cursor: pointer;
                border-radius: 12px;
            }
        `}</style>
    );
};

export default Reply_form_css;
