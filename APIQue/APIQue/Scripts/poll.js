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
    //тут нужно будет из реквеста получить json
    var pollJSON = '{"Questions":[{\"Type\":"One","Header":\"que1\",\"AnswersVariations\":[{"Text":\"1?\",\"Value\":1000.0},{"Text":\"2?\",\"Value\":9000.0}],"Answers":null},{\"Type\":"Mulltiple","Header":\"que2\",\"AnswersVariations\":[{"Text":\"1?\",\"Value\":1000.0},{"Text":\"2?\",\"Value\":9000.0},{"Text":\"3?\",\"Value\":-9000.0},{"Text":\"4?\",\"Value\":7.0}],"Answers":null}]}'
    var pollObj = JSON.parse(pollJSON);
    for (var i in pollObj.Questions) {
        DrawQuestion(pollObj.Questions[i]);
    }
    var button = $('<div/>',
        {
            id: 'nextButton',
            html:'<span>Далее</span>',
            class: 'btn btn-default btn-lg',
            css: {
                'width': '150px',
                'margin-top': '15px'
            }
        })
    $('#pollBody').append(button);

    //после всего навесить на кнопку завершения отправку результатов в webapi (чекай ajax request)
}

function DrawQuestion(question) {
// где то в функции нужно навесить событие на input чтобы по клику инпута изменял в jsone поле с ответом
    var header = $('<p/>',
        {
            html: question.Header,
            css: {
                'font-size': '16pt',
                'color': '#757575',
                'padding': '15px'
            }
        });

    $('#pollContainer').append(header);

    for (var j in question.AnswersVariations) {
        var label = $('<label/>',
            {
                text: question.AnswersVariations[j].Text
            })
        var input = $('<input/>',
            {
                id: 'inputId' + j,
                type: 'radio',
                css: {
                     'padding': '10px'
                }
            });
        $('#pollContainer').append(label.append(input));
    }

}

// function sendDataToServer(pollObj) {
//   var resultAsString = JSON.stringify(pollObj);
//   alert(resultAsString); //send Ajax request to your web server.
// }