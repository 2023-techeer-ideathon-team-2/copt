import Button from "./Button";
import Radio from "./Radio";
import Title from "./Title";

const ChooseQuestion = () => {
    return (
        <div 
            style={{ 
                backgroundColor: '#fff',
                width: '70%',
                height: '60%',
                margin: '0 auto',
                display: 'flex',    
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderRadius: '25px',
                boxShadow: '0px 11.6189px 124.28px rgba(37, 72, 153, 0.17)',
                padding: '2rem'
            }}>
                <Title title={"Choose Your Position🔎"}/>

                <Radio/>
                <Radio/>

                <div style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-around",
                    paddingTop: "1.7rem",
                    borderTop: "1px solid #ccc"
                    }}>
                    <Button backgroundColor={"#F5F7FB"} text={"Prev"}/>
                    <Button backgroundColor={"#9B68B4"} text={"Next"}/>
                </div>
                
       
        </div>
    );
};

export default ChooseQuestion;