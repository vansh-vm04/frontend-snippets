import React, { useEffect, useState, memo } from 'react'

function Increase() {
  console.log("Increase component rendered");
  return <button >Increase</button>
}

function Decrease() {
  console.log("Decrease component rendered");
  return <button >Decrease</button>
}

const Counting = memo(() => {
  console.log("Counting component rendered");
  return <div>Count : {1}</div>;
});

function Parent() {
  const [count, setcount] = useState(0)

//   useEffect(() => {
//     const id = setInterval(() => setcount(c => c + 1), 2000);
//     return () => clearInterval(id);
//   }, [])

  return (
    <div>
      <Counting />
      <Increase  />
      <Decrease />
    </div>
  );
}

const MemoPage = () => {
  return (
    <div>
      <Parent />
    </div>
  )
}

export default MemoPage
