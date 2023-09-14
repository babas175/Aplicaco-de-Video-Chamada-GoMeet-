const Button = (props) => {
    return (
        <button onClick={() => props.onClick ? props.onClick() : null} type={props.type} id={props.id} >
            {props.children}
        </button>
    );
};

export default Button;