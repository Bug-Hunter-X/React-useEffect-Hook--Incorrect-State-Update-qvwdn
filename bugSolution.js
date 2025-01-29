useEffect(() => {
  // Correct way to update state using functional update
  setCounter(prevCounter => prevCounter + 1);
}, []);