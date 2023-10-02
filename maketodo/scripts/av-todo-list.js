const avList = [
  
];

//event listeners
document.querySelector('.js-add-av-button').addEventListener('click',() =>{
  addAv();
});

function addAv(){
  //date
  const dateInputElement = document.querySelector(".js-av-date-input "); 
  const date = dateInputElement.value
  
  //starttime
  const startTimeInputElement = document.querySelector(".js-av-start-time-input")
  const startTime = startTimeInputElement.value;

  //endtime
  const endTimeInputElement = document.querySelector(".js-av-end-time-input")
  const endTime = endTimeInputElement.value;

  if(dateInputElement.value){
    avList.push({
      date,
      startTime,
      endTime, 
      avDuration: getDuration(date,startTime,endTime),
      startDate: createDate(date, startTime),
      endDate: createAddDurationDate(createDate(date, startTime), getDuration(date,startTime,endTime))
      
    });
    dateInputElement.value = startTimeInputElement.value = endTimeInputElement.value = ''; 
  }
  renderAvList();
}


// duration - additional parametr
// with duration returns (date + time of duration)
function createDate(startDate, time){
  return new Date((startDate+"T"+time).toString())
}

function createAddDurationDate(date, duration){
  const calculateDate = (date.valueOf() + (duration*60*60*1000));
  return new Date(calculateDate)
  }

function getDuration(date,startTime,endTime){
  
    const sDate = createDate(date, startTime);    
    const eDate = createDate(date, endTime);
    
    let duration = (Math.round(((eDate.getTime()-sDate.getTime())/3600000)*100))/100;

    if (duration<0){
      duration = Math.round((duration + 24)*100)/100;
    }

    return duration;
}

function renderAvList(){
  let avListHTML= [];
  avList.forEach((currentAvObj, index) => {

    const {date,startTime,endTime, avDuration} = currentAvObj;
    
    const html = `
    <div>${date}</div>
    <div>${startTime}</div>
    <div>${endTime}</div>
    <div>${avDuration}h (${Math.round(avDuration*60)} min)</div>

    <div>
    <button
      class="delete-av-button js-delete-av-button"
    >Usuń</button>
    </div>
    `;
    avListHTML += html;

    console.log(avList);

  });
  document.querySelector(".js-av-list").innerHTML = avListHTML;

  
  // event listener - MUSI BYĆ TUTAJ bo dopiero powyżej został stworzony ten element na stronie
  document.querySelectorAll(".js-delete-av-button").forEach((deleteButton,index) =>{
    deleteButton.addEventListener('click',() =>{
      avList.splice(index,1);
      renderAvList();

    })
  })
}
