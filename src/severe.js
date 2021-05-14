const severelist = ({severe,handleClickAgain}) => {
    return ( 
       <div className="st-list">
           {severe.map(sev) => (
               <div className="st" key={sev.id}>
                   <h2>{sev.problem}</h2>
                   <p>{sev.description}</p>
                   <button onClick={handleClickAgain}> CLICK FOR DIET </button>
               </div>
           )}
       </div>
     );
}
 
export default severelist;