function uniTotal(a) {
  let newS = [];
  let finalS;
  for (let i = 0; i < a.length; i++) {
    newS.push(a.charCodeAt(i));
    //console.log("newS:", newS);
  }
  if (a === "") return 0;
  if (a.length === 1) return a.charCodeAt(0);
  if (newS.length > 1) {
    finalS = newS.reduce((a, b) => a + b);
  }
  return finalS;
}