let hero = document.querySelector(".hero");
let hit = document.querySelector("#hit");
let score = document.querySelector("#score");

bubble = () => {

  let clutter = "";
  for (let index = 0; index < 154; index++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div onclick="circle(${rn})"
            class=" p-5 w-3 h-3 bg-green-700 text-white rounded-full flex justify-center items-center hover:bg-green-900 cursor-pointer"
          >
       <p> ${rn}</p></div>`;
  }

  hero.innerHTML = clutter;
};

bubble();

let ans=``;
timer = () => {
  let value = 60;
 let clear = setInterval(() => {
    if (value==0) {
        clearInterval(clear);
        ans=`<div class="ans  flex flex-col h-[100%] w-[100%] flex items-center justify-center bg-[#EEA47FFF] text-[#00539CFF]">
  <h1 class="text-[4vw] max-sm:text-[6vw]"> Your score is: ${score.innerHTML}</h1>
<button onclick="load()" type="button" class="text-[#00539CFF] hover:text-white border border-[#00539CFF] hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-[#00539CFF] dark:text-[#00539CFF] dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Play again</button>
</div>`
hero.innerHTML=ans;
        return false;
    }

    value = value - 1;
    document.querySelector("#timer").innerText =value;
  }, 1000);
};
hitting = () =>{
    let hitNum = Math.floor(Math.random() * 10);
    hit.innerHTML = hitNum;
}



circle = (val)=>{
    // console.log("Click " + val + hit.innerHTML);
    if (val==hit.innerHTML) {
        // console.log("equal "+hit.innerHTML);
        console.log( parseInt(score.innerHTML));
        console.log(parseInt( hit.innerHTML));


       let scoreVal= parseInt(score.innerHTML);
        let hitVal = parseInt( hit.innerHTML);
        scoreVal+=hitVal;
        score.innerHTML=scoreVal;
    hitting();
        // disabled =true;
    }
}


load = ()=>{
    timer();
    hitting();
    bubble();
   score.innerHTML=0;
  hero.innerHTML = clutter;
}


window.addEventListener("load",()=>{
  timer();
  hitting();
})
