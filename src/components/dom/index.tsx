const DomExample = () => {
  // const write = document.write('Hello') as ReactNode;

  const handleSumValue = () => {
    const num1 = Number((document.getElementById('val1') as HTMLInputElement).value);
    const num2 = Number((document.getElementById('val2') as HTMLInputElement).value);

    const add = num1 + num2;
    // Displays the result in paragraph using dom
    document.getElementById('result')!.innerHTML = 'Addition : ' + add;

    // Changes the color of paragraph tag with red
    document.getElementById('result')!.style.color = 'red';
  };

  return (
    <div id="example">
      Dom Example
      <label htmlFor="">Value 1: </label>
      <input type="number" name="" id="val1" />
      <label htmlFor="">Value 2: </label>
      <input type="number" name="" id="val2" />
      <button onClick={handleSumValue}>Add</button>
      <p id="result"></p>
    </div>
  );
};

export default DomExample;
