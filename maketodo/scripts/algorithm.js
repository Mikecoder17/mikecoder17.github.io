let scheduleList = [
  //Subject:
  //Start date:
  //Start time:
  //End date:
  //End time:
  //Description: (optional - in the future)
];

function todoAlg(todoList, avList) {
  scheduleList = [];

  const tempTodoList = todoList.map(object => ({ ...object }));
  const tempAvList = avList.map(object => ({ ...object }));

  // foreach todoList
  // weź pierwsze datowo wolne z avlist, sprawdź czy się mieści
  // jak się mieści, dodaj do schedule list i odejmij ten czas z tego wolnego o tyle ile trwa ta czynności
  // jak się nie mieści przejdź do kolejnego datowo
  // jeżeli wgl nie znajdzie to komunikat "za mało dostępnego czasu na realizację zadania"

  tempTodoList.forEach((todo) => {
    let isChoosen = false;

    for (let i = 0; i < tempAvList.length; i++) {

      if (tempAvList[i].avDuration + 0.01 >= todo.duration) {
        scheduleList.push({
          'Subject': todo.name,
          'Start date': (tempAvList[i].startDate).toLocaleDateString('en-US'),
          'Start time': (tempAvList[i].startDate).toLocaleTimeString('en-US'),
          'End date': (createAddDurationDate(tempAvList[i].startDate, todo.duration)).toLocaleDateString('en-US'),
          'End time': (createAddDurationDate(tempAvList[i].startDate, todo.duration)).toLocaleTimeString('en-US')
        });

        //zmniejszyć dostępny czas
        tempAvList[i].avDuration = tempAvList[i].avDuration - todo.duration;

        //przesunąc date rozpoczęcia
        tempAvList[i].startDate = createAddDurationDate(tempAvList[i].startDate, todo.duration);
        isChoosen = true;
        break;
      }
    }
    if (isChoosen == false) {
      alert('Za mało dostępnego czasu na zadanie: ' + (todo.name).toString())
    }

  });

  return (scheduleList);

}

function CSV(array) {
  // Use first element to choose the keys and the order
  var keys = Object.keys(array[0]);
  // Build header
  var result = keys.join(",") + "\n";
  // Add the rows
  array.forEach(function (obj) {
    result += keys.map(k => obj[k]).join(",") + "\n";
  });
  return result;
}

function download(filename, text) {
  let element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function addCalendarButton() {
  const html = `
    <button
      class="calendar-button js-calendar-button" 
    >Otwórz Google Calendar</button>
    <button class="js-generate-pdf-button pdf-button">Wygeneruj pdf</button>
    `;
  document.querySelector(".js-calendar-div").innerHTML = html;

  //event listeners
  document.querySelector('.js-calendar-button').addEventListener('click', () => {
    window.open('https://calendar.google.com/calendar/u/0/r/settings/export');
  });
  document.querySelector('.js-generate-pdf-button').addEventListener("click", function () {
    let schedule = todoAlg(todoList, avList);
    generatePDF(schedule);
  }, false);
}

function generatePDF(schedule) {
  let content = 'Harmonogram \n\n\n';
  i = 1;
  schedule.forEach((task) => {

    content += `Zadanie nr ${i} [${(task["Start date"]).toLocaleDateString('en-US')
      } ${task["Start time"]} do ${task["End time"]}] ${task["Subject"]} \n\n`
    i += 1;
  }
  )

  const doc = new jsPDF();
  doc.text(content, 10, 10);
  doc.save("todo.pdf");
}

//event listeners
document.querySelector('.js-generate-schedule-button').addEventListener("click", function () {
  addCalendarButton();
  let content = CSV(todoAlg(todoList, avList));
  let filename = "todo.csv";

  download(filename, content);
}, false);
