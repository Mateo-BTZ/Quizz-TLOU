import { Result } from 'antd';
import React from 'react';
import { Link } from "react-router-dom";

function Scores() {

      
      const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    
      const titles = Object.keys(highScores[0]);

      return(

        <table>
            <thead>
                <tr>
                    {titles.map((title, key) =>(
                        <th key={key}>{title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {highScores.map((items, i) =>
                <tr key={i}>
                    {(Object.values(highScores[i])).map((value: any,key: number) => (
                        <td key={key}>{value}</td> 
                    ))}
                </tr>
                )}
            </tbody>
        </table>
      )
        

    // return(

    //     <div className="table">
    //     <table className="table table-striped hide" id="table">
    //         <thead className="text-black bg-white ">
    //             <tr>
    //                 <th scope="col">Classement</th>
    //                 <th scope="col">Nom</th>
    //                 <th scope="col">Score</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             <tr>
    //                 <td>1</td>
    //                 <td>Matibalt</td>
    //                 <td></td>
    //             </tr>
    //             <tr>
    //                 <td>2</td>
    //                 <td></td>
    //                 <td></td>
    //             </tr>
    //             <tr>
    //                 <td>3</td>
    //                 <td></td>
    //                 <td></td>
    //             </tr>
    //             <tr>
    //                 <td>4</td>
    //                 <td></td>
    //                 <td></td>
    //             </tr>
    //             <tr>
    //                 <td>5</td>
    //                 <td></td>
    //                 <td></td>
    //             </tr>
    //             <tr>
    //                 <td>6</td>
    //                 <td></td>
    //                 <td></td>
    //             </tr>
    //             <tr>
    //                 <td>7</td>
    //                 <td></td>
    //                 <td></td>
    //             </tr>
    //             <tr>
    //                 <td>8</td>
    //                 <td></td>
    //                 <td></td>
    //             </tr>
    //             <tr>
    //                 <td>9</td>
    //                 <td></td>
    //                 <td></td>
    //             </tr>
    //             <tr>
    //                 <td>10</td>
    //                 <td></td>
    //                 <td></td>
    //             </tr>
    //         </tbody>
    //     </table>  
    //     <Link to="/"><button style={{marginTop: "340px"}} variant="primary" className="Btn">Retour</button></Link>
    // </div>
    // )
    
}
export default Scores;