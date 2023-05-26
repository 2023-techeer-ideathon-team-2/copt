const Title = (props)  => {
    return (
        <div>
            <p 
                style={{
                    fontSize: "1.7rem",
                    fontWeight: "500"
                }}
            >
                {props.title}</p>
        </div>
    );
};

export default Title;