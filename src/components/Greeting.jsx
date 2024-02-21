import "./styles.css";
function Greeting (props) {
    return (
        <div className="greeting">
            <p>Welcome to Uwear {props.username}! We are your personal wardrobe.yaas</p>
        </div>
    )
}

export default Greeting;