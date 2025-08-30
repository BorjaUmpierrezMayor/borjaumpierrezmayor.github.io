function successProbability(needed, mode) {
  let p = needed <= 1 ? 1 :
          needed > 20 ? 0 :
          (21 - needed) / 20;

  if (mode === "advantage") return 1 - Math.pow(1 - p, 2);
  if (mode === "disadvantage") return p * p;
  return p;
}

const form = document.getElementById('mobForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.classList.add('was-validated');
    return;
  }

  const groupQty = parseInt(document.getElementById("groupQty").value);
  const bonus = parseInt(document.getElementById("bonus").value);
  const dc = parseInt(document.getElementById("dc").value);
  const mode = document.getElementById("mode").value;

  const needed = dc - bonus;
  const pSuccess = successProbability(needed, mode);
  const expectedSuccesses = Math.round(pSuccess * groupQty);

  document.getElementById("result").innerText =
    `Need ${needed}+ on d20.
     Individual success chance: ${(pSuccess*100).toFixed(1)}%.
     Out of ${groupQty} creatures, about ${expectedSuccesses} success.`;
});
