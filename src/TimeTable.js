// import React, { Component } from "react";
// import PostData from "../src/Data/posts.json";

// export class TimeTable extends Component {
//     render() {
//         return(
//             <div className="dataTable">
//             {PostData.map((tabDetails, index) => {
//               return (
//                 <tbody class="table table-striped">
//                   <tr>
//                     <td>{tabDetails.slots.forEach(time => {
//                       for (let key in time){
//                         return <td>{time.slotTime}</td>
//                       }
//                     })}</td>
//                   </tr>
//                 </tbody>
//               );
//             })}
//           </div>
//         )
//     }
// }