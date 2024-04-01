// function App(){
//   const array = ["React","Node Js","MongoDB"]
//   const newarray = array.map(  (ele) => {ele});
//   return(
//     <>
//     <ul>
//       <li>{newarray}</li>
//     </ul>
//     </>
//   );
// }


// export default App;

function App() {
  const array = ["React", "Node Js", "MongoDB"];
  const newarray = array.map((ele, index) => (
    <li key={index}>{ele}</li>
  ));
console.log(newarray)
  return (
    <>
      <ul>{newarray}</ul>
    </>
  );
}

export default App;
