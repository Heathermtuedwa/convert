
      function convert(mintues){
        const seconds =  mintues * 60;
            return seconds;
        }
        let btn = document.getElementById("inputBtn");
btn.addEventListener("click", () => {
  let minutes = document.getElementById("numInput").value;
  let display = document.getElementById("count");
  display.innerHTML = minutes * 60;
  minutes = "";
});