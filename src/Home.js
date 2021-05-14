import {useState , useEffect} from 'react';
import  "./Home.css";

const Calc = () => {

    const[result, setresult]=useState();

    const [severe, setsevere]=useState(
        {
            problem : "" , solution  : "" , class : "inactive" , diet : ""
        }
    );

    const[para , setPara]=useState("inactive");

    const handleClick=()=>
    {
        const h=parseInt(document.getElementById("height").value);
        console.log(h);
        const w=parseInt(document.getElementById("weight").value);
        console.log(w);
        setresult (w/(h*h))

        
    }
    useEffect(() => {

        if(result<16)
        {
            
            setsevere(

                {
                    problem : "Your bmi calculator shows: Severe thinness!!",
                    solution : "Being underweight has its own associated risks, listed below:&#13; Malnutrition, vitamin deficiencies, anemia (lowered ability to carry blood vessels) Osteoporosis, a disease that causes bone weakness, increasing the risk of breaking a bone A decrease in immune function Growth and development issues, particularly in children and teenagers Possible reproductive issues for women due to hormonal imbalances that can disrupt the menstrual cycle. Underweight women also have a higher chance of miscarriage in the first trimester Potential complications as a result of surgery Generally, an increased risk of mortality compared to those with a healthy BMI In some cases, being underweight can be a sign of some underlying condition or disease such as anorexia nervosa, which has its own risks. Consult your doctor if you think you or someone you know is underweight, particularly if the reason for being underweight does not seem obvious.",
                    class : "active",
                    diet : "severe thinness diet"
                }

            );
        }
        else if(result>=18.5 && result<=24.9)
        {
            
            setsevere(

                {
                    problem : "Your bmi calculator shows: Normal Weight !",
                    solution : "a",
                    class : "active",
                    diet : "normal diet"
                }
                

            );
        }
        else if(result>=25 && result<=29.9)
        {
            
            setsevere(

                {
                    problem : "Your bmi calculator shows: Overweight !",
                    solution : "b",
                    class : "active",
                    diet : "ow diet"
                }

            );
             
        }
        else if(result>=30 )
        {
            
            setsevere(

                {
                    problem : "Your bmi calculator shows: Obsese !",
                    solution : "c",
                    class : "active",
                    diet : "obese diet"
                }

            );
        }

        
      }, [result]);
    

    const handleClickAgain=()=>
    {
          setPara("active");
    }
    

    return (
        <article className="wrapper">
        <div className="calc">
            <h1>BMI CALCULATOR </h1>
            
            <div className="inputs" /*style=
            {{
                display:'flex',
                flexDirection:'row',
                justifyContent: 'space-between'
            }}*/>
                <div className="h" /*style=
                {{
                    display:'flex',
                flexDirection:'column',
                justifyContent: 'space-between'
                }}*/>
                <label for ="height"  className="labelheight"> ENTER HEIGHT: </label>
                <input type="text" id="height" className="height" name="" ></input>
                </div>
            
            
                <div className="w" /*style=
                {{
                    display:'flex',
                flexDirection:'column',
                justifyContent: 'space-between'
                }}*/>
                <label for ="weight" className="labelweight"> ENTER WEIGHT: </label>
                <input type="text" id="weight" className="weight" name="" ></input>
                </div>
            
            
            </div>
            
            <button onClick={handleClick} className="submit-but"> SUBMIT</button>
            
            

            <div className="theory">
            <div className="st">
              <p className="result">Result: {result}</p>
                <p className="prob"><b>PROBLEM:</b> {severe.problem}</p>
                <p className="sol"><b>SOLUTION:</b> {severe.solution}</p>
                </div>
                <div className="diets">
                <button class={severe.class} onClick={handleClickAgain} id="diet-but">PRESS TO KNOW ABOUT DIET CHART </button> 
            <p className={para} id="diet" >{severe.diet}</p>
                </div>
            </div>
              
            
           
        
        </div>
        </article>
      );
}
 
export default Calc;