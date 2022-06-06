function Recommendations() {
  const currentMonth = new Date().getMonth();
  const isSpring = currentMonth >= 2 && currentMonth <= 5;
  console.log(currentMonth);

  if (isSpring) {
    return <div>C'est le printemps, rempotez!</div>;
  }
  return <div>Ce n'est pas le moment de rempoter</div>;
}

export default Recommendations;
