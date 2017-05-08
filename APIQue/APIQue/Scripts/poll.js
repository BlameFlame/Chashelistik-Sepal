function CreatePoll() {
     var pollBody = $('<div/>', {
        id: 'pollBody',
        css: {
            'text-align': 'center',
            'background-color': '#e6e6e6',
            'padding': '15px'
        }
    })
              
    var pollContent = $('<div/>', {
        id: 'pollContent'
    }).append($('<h2>Ответьте на 10 вопросов</h2>')
      .append($('<p/>', {
          html: 'Узнайте информацию о стоимости вашего дома <br> Подарок в виде скидки',
          css: {
            'font-size': '14pt',
            'color': '#757575',
            'padding': '15px'
          }
      })));

    var button = $('<div/>', {
        class: 'btn btn-default btn-lg',
        css: {
            'width':'150px',
            'margin-top':'15px'
        }
    }).append("<span>Начать</span>")
      .click(StartPoll);

    pollContent.append(button)


    $('.poll').append(pollBody.append(pollContent));
}

function StartPoll() {
    $('#pollContent').remove();
    var div = $('<div/>',
        {
            id: 'pollContainer'
        });
    $('#pollBody').append(div);

    PollProcessing();
}

function PollProcessing() {

var pollJSON = '{"Questions":[{\"Type\":"One","Header":\"que1\",\"AnswersVariations\":[{"Text":\"1?\",\"Value\":1000.0},{"Text":\"2?\",\"Value\":9000.0}],"Answers":null},{\"Type\":"Mulltiple","Header":\"que2\",\"AnswersVariations\":[{"Text":\"1?\",\"Value\":1000.0},{"Text":\"2?\",\"Value\":9000.0},{"Text":\"3?\",\"Value\":-9000.0},{"Text":\"4?\",\"Value\":7.0}],"Answers":null}]}'

// var pollJSON = {
//     "Questions": [
//         {
//             "Type": "One",
//             "Header": "que1",
//             "AnswersVariations": null,
//             "Answers": [{ "Text": "1?", "Value": 1000.0 }, { "Text": "2?", "Value": 9000.0 }]
//         },
//         {
//             "Type": "Mulltiple",
//             "Header": "que2",
//             "AnswersVariations": null,
//             "Answers": [
//                 { "Text": "1?", "Value": 1000.0 }, { "Text": "2?", "Value": 9000.0 },
//                 { "Text": "3?", "Value": -9000.0 }, { "Text": "4?", "Value": 7.0 }
//             ]
//         }
//     ]
// }



    var pollObj = JSON.parse(pollJSON);
    sendDataToServer(pollObj)
};

function sendDataToServer(pollObj) {
  var resultAsString = JSON.stringify(pollObj);
  alert(resultAsString); //send Ajax request to your web server.
}