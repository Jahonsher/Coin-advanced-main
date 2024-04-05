
// CHOOSE FILE JS
const realFileBtn = document.querySelector(".real-file");
const customFile = document.querySelector(".custom-file");
const customText = document.querySelector(".custom-text");

customFile.addEventListener('click', ()=>{
    realFileBtn.click();
})

realFileBtn.addEventListener("change", ()=>{
    if(realFileBtn.value){
        customText.innerHTML = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    }else{
        customText.innerHTML = "No file choosen, yet.";
    }
})


// CHART JS 
const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [
            '860 JAVA',
            '730 CSS',
            '234 HTML'
          ],
          datasets: [{
            label: 'Students',
            data: [860, 730, 234],
            backgroundColor: [
              '#775DA6',
              '#FFB1B7',
              '#70B6C1'
            ],
            hoverOffset: 4
          }]
    },
    options: {
      scales: {
        // y: {
        //   beginAtZero: true
        // }
      }
    }
  });



// CIRCLE PROGRESS BAR
let progressBars = document.querySelectorAll(".progress-bar");
let valueContainers = document.querySelectorAll(".progress-value");

let speed = 50;

// Har bir .progress-value elementining qiymatlarini biriktiramiz
let progressEndValues = Array.from(valueContainers).map(container => parseInt(container.textContent, 10));

// Har bir progress uchun alohida intervalni saqlash uchun massiv
let intervals = [];

// Har bir progressni alohida boshlash
progressBars.forEach((progressBar, index) => {
    let progressValue = 0;
    let interval = setInterval(() => {
        // Progress qiymatini o'zgartirish
        progressValue++;
        valueContainers[index].textContent = `${progressValue}%`;
        let color = getColor(progressValue);
        progressBar.style.background = `conic-gradient(
            ${color} ${progressValue * 3.6}deg,
            #F9F9F9 ${progressValue * 3.6}deg
        )`;

        // Har bir progressni o'zining o'zining alohida qiymati bilan solishtirish
        if (progressValue == progressEndValues[index]) {
            clearInterval(interval);
        }
    }, speed);
    intervals.push(interval); // Har bir intervalni massivga qo'shish
});

function getColor(value){
    if(value>=90){
        return "#775DA6";
    }else if(value<=75){
        return "#70B6C1";
    }
}

// LINEAR PROGRESS BAR
let linearProgressBars = document.querySelectorAll(".linear-progress-bar");
let progressBarValues = document.querySelectorAll(".progress-bar-value");

let speedTwo = 50;

// Har bir .progress-value elementining qiymatlarini biriktiramiz
let progressEndValueTwo = Array.from(progressBarValues).map(containers => parseInt(containers.textContent, 10));

// Har bir progress uchun alohida intervalni saqlash uchun massiv
let twoIntervals = [];

// Har bir progressni alohida boshlash
linearProgressBars.forEach((progressBars, index) => {
    let progressValue = 0;
    let interval = setInterval(() => {
        // Progress qiymatini o'zgartirish
        progressValue++;
        progressBarValues[index].textContent = `${progressValue}%`;
        let color = getLinearColor(progressValue);
        progressBars.style.background = `linear-gradient(
            to right,
            ${color} ${progressValue}%,
            #F9F9F9 ${progressValue}%
        )`;

        // Har bir progressni o'zining o'zining alohida qiymati bilan solishtirish
        if (progressValue == progressEndValueTwo[index]) {
            clearInterval(interval);
        }
    }, speedTwo);
    intervals.push(interval); // Har bir intervalni massivga qo'shish
});

function getLinearColor(value){
    if(value>=90){
        return "#CA79C6";
    }else if(value<=70){
        return "#77BEEB";
    }else if(value<=80){
        return "#FF706F";
    }else if(value<=89){
        return "#79CFA6";
    }
}


// TEACHER CATEGORY JS
let addCategoryBtn = document.querySelector(".add-btn--search-input-wrapper .add-btn");
let closeButton = document.querySelector(".cancel");
let categorySection = document.querySelector(".add-category");
let closeBtnX = document.querySelector(".close");

function closeCategorySection() {
    categorySection.style.display = "none";
}

closeBtnX.addEventListener('click', closeCategorySection);
closeButton.addEventListener('click', closeCategorySection);

addCategoryBtn.addEventListener("click", () => {
    categorySection.style.display = "flex";
});




function closeBtn() {
    var closeIcon = document.querySelector(".gift-info-wrapper")
    closeIcon.style.display = "none";
  }


  function openModal() {
    const modal =document.querySelector(".gift-info-wrapper");
    modal.style.display="block";
  }

  function addTestCloseBtn() {
    // const modal2 =document.querySelector(".section-right-main--body");
    var addTestCloseIcon = document.querySelector(".add-category")
    addTestCloseIcon.style.display = "none";
    // modal2.style.display="block";   
  }



  function addTestOpenModal() {
    const modal1 =document.querySelector(".add-category");
    // const modal2 =document.querySelector(".section-right-main--body");
    modal1.style.display="flex";
    // modal2.style.display="none";
    
  }