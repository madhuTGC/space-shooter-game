var url = new URL(window.location.href);
console.log(url);
var urlParams = new URLSearchParams(window.location.search);
let paramUserID = urlParams.get('userid');
let ParamOrgID= urlParams.get('OrgID');
 let M2OstAssesmentID=0;
let id_game=urlParams.get('idgame');
let gameAssesmentId=urlParams.get('gameassid');
let currentQuestionIndex=0;



const QuestionList=
    [
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 79,
          "Id_Assessment": 14,
          "Assessment_Question": "1.भारत के वर्तमान सीईओ कौन हैं?",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 280,
              "Id_Assessment_question": 79,
              "Answer_Description": "a)गुंजन शाहrn",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701946587000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 281,
              "Id_Assessment_question": 79,
              "Answer_Description": "b)संदीप कटारिया",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701946621000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 282,
              "Id_Assessment_question": 79,
              "Answer_Description": "ग) क्रिस किर्क",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701946648000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 283,
              "Id_Assessment_question": 79,
              "Answer_Description": "d)इनमें से कोई नहीं",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701946673000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 80,
          "Id_Assessment": 14,
          "Assessment_Question": "3.बाटा इंडिया लिमिटेड (BIL) की शुरुआत हुई:rn",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 288,
              "Id_Assessment_question": 80,
              "Answer_Description": "ए)1894",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947726000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 289,
              "Id_Assessment_question": 80,
              "Answer_Description": "बी)1931",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947748000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 290,
              "Id_Assessment_question": 80,
              "Answer_Description": "ग)1936",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947769000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 291,
              "Id_Assessment_question": 80,
              "Answer_Description": "घ) उपरोक्त में से कोई नहीं",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947796000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 81,
          "Id_Assessment": 14,
          "Assessment_Question": "4. भारत में 3 विनिर्माण इकाइयों के नाम बताइए।",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 292,
              "Id_Assessment_question": 81,
              "Answer_Description": "ए) बाटा नगर,",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947821000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 293,
              "Id_Assessment_question": 81,
              "Answer_Description": "b) बाटा गंज",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947844000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 294,
              "Id_Assessment_question": 81,
              "Answer_Description": "c) बता शतक",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947866000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 295,
              "Id_Assessment_question": 81,
              "Answer_Description": "D। उपरोक्त सभी",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947885000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 82,
          "Id_Assessment": 14,
          "Assessment_Question": "5. बाटा कंपनी की दुनिया भर में __ उत्पादन इकाई है।",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 296,
              "Id_Assessment_question": 82,
              "Answer_Description": "ए) 32",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947915000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 297,
              "Id_Assessment_question": 82,
              "Answer_Description": "बी)34",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947936000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 298,
              "Id_Assessment_question": 82,
              "Answer_Description": "ग) 26",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947961000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 299,
              "Id_Assessment_question": 82,
              "Answer_Description": "घ) 26",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947977000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 83,
          "Id_Assessment": 14,
          "Assessment_Question": "6.BC की उपस्थिति __ से अधिक देशों में है।",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 300,
              "Id_Assessment_question": 83,
              "Answer_Description": "ए)50+",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947998000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 301,
              "Id_Assessment_question": 83,
              "Answer_Description": "बी)70+",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948021000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 302,
              "Id_Assessment_question": 83,
              "Answer_Description": "ग)80+",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948064000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 303,
              "Id_Assessment_question": 83,
              "Answer_Description": "घ)100+",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948092000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 84,
          "Id_Assessment": 14,
          "Assessment_Question": "7.BCP का पूर्ण रूप क्या है?",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 304,
              "Id_Assessment_question": 84,
              "Answer_Description": "a) बाटा चैट प्रोग्राम",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948118000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 305,
              "Id_Assessment_question": 84,
              "Answer_Description": "b)बाटा चिल्ड्रेन प्रोग्राम",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948144000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 306,
              "Id_Assessment_question": 84,
              "Answer_Description": "c) बाटा कॉर्पोरेशन प्रोग्राम",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948166000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 307,
              "Id_Assessment_question": 84,
              "Answer_Description": "d)बाटा कंपनी प्रोफाइलrn",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948192000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 85,
          "Id_Assessment": 14,
          "Assessment_Question": "rnrn8)बाटा कंपनी की शुरुआत कब हुई?rn",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 308,
              "Id_Assessment_question": 85,
              "Answer_Description": "1894rn",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948219000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 309,
              "Id_Assessment_question": 85,
              "Answer_Description": "बी) 1856",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948240000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 310,
              "Id_Assessment_question": 85,
              "Answer_Description": "ग) 1908",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948263000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 311,
              "Id_Assessment_question": 85,
              "Answer_Description": "घ) 1915",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948289000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 86,
          "Id_Assessment": 14,
          "Assessment_Question": "9. BIL के भारत में __ संख्या में स्टोर हैं।",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 312,
              "Id_Assessment_question": 86,
              "Answer_Description": "ए) 1558",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948324000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 313,
              "Id_Assessment_question": 86,
              "Answer_Description": "बी) 1200",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948340000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 314,
              "Id_Assessment_question": 86,
              "Answer_Description": "ग) 1100",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948370000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 315,
              "Id_Assessment_question": 86,
              "Answer_Description": "घ) 5000",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948416000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 87,
          "Id_Assessment": 14,
          "Assessment_Question": "10.कंप्यूटर सीखना विज्ञान प्रयोगशालाओं तक पहुंच किस कार्यक्रम के अंतर्गत आता है?",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 316,
              "Id_Assessment_question": 87,
              "Answer_Description": "क) गर्व के साथ आगे बढ़ें।",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948447000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 317,
              "Id_Assessment_question": 87,
              "Answer_Description": "ख) नन्हीं कली।",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948467000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 318,
              "Id_Assessment_question": 87,
              "Answer_Description": "ग) एसटीईएम कार्यक्रम।",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948492000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 319,
              "Id_Assessment_question": 87,
              "Answer_Description": "घ) हैप्पी फीट।",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948517000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 88,
          "Id_Assessment": 14,
          "Assessment_Question": "2.BIL का पूर्ण रूप क्या है?",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 284,
              "Id_Assessment_question": 88,
              "Answer_Description": "a) बाटा इंडिया लिमिटrn",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947631000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 285,
              "Id_Assessment_question": 88,
              "Answer_Description": "b) बाटा इंडियन लिमिटेडrn",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947650000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 286,
              "Id_Assessment_question": 88,
              "Answer_Description": "c) बाटा इंडिया लिमिटेडrn",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947675000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 287,
              "Id_Assessment_question": 88,
              "Answer_Description": "d)इनमें से कोई नहीं",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947701000)",
              "Id_CmsUser": 21
            }
          ]
        }

]


// let currentQuestionIndex = 0;

function displayQuestion() {
  if (!isGamePaused && currentQuestionIndex < QuestionList.length) {
    pauseGame();
    const currentQuestion = QuestionList[currentQuestionIndex];
    displayQuestionInModal(Object.values(currentQuestion)[0]);
    currentQuestionIndex++;
  } else if (currentQuestionIndex >= QuestionList.length) {
    currentQuestionIndex = 0;
    alert("Game Over");
    // Additional logic for game over
  }
}



function displayQuestionInModal(question) {
  $('#questionText').text(question);
  $('#continueButton').on('click', function () {
      // Close the modal
      $('#questionModal').modal('hide');
      // Resume the game logic here
      resumeGame();
  });

  $('#questionModal').modal('show');
}





// let contentDiv = $('#contentDiv');


// function displayQuestionInModal(questionObj) {
  
//   console.log(questionObj);
//   const question = questionObj.Assessment_Question;
//   const content = questionObj.assessment_question_url;


//   const options = questionObj.optionList;
//   var assessmentType = questionObj.Assessment_Type;
  // var contentDiv = $('#contentDiv');
  
  // Clear existing content in contentDiv
  // contentDiv.empty();
  
  // Depending on the assessment type, add the corresponding content
  // if (assessmentType === 1) {
  //   // Add image
  //   var imageUrl = questionObj.assessment_question_url;
  //   var imageElement = $('<img>').attr('src', imageUrl).attr('alt', 'Image Alt Text').css({
  //       'width': '100%',
  //       'max-width': '100%',
  //       'height': '100%',
  //       'border-radius': '10px'
  //   });
  //   contentDiv.append(imageElement);

  //   // Empty the contentDiv and append the new image
  //   $('#contentDiv').empty().append(imageElement);
  
  // } else if (assessmentType === 2) {
  //     // Add audio
  //     var audioUrl = questionObj.assessment_question_url;
  //     var audioElement = $('<audio controls>').attr('src', audioUrl);
  //     contentDiv.append(audioElement);
  // } else if (assessmentType === 3) {
  //     // Add video
  //     var videoUrl = questionObj.assessment_question_url;
  //     var videoElement = $('<video controls>').attr('src', videoUrl).css({
  //         'width': '100%',
  //         'max-width': '100%',
  //         'height': '100%'
  //     });
  //     contentDiv.append(videoElement);
  // } else {
  //     // Handle other assessment types or provide a default behavior
  //     contentDiv.text('Unsupported assessment type');
  // }}
// }


// Empty the contentDiv and append the new image
// $('#contentDiv').empty().append(imageElement);

  // Display question number and text
  // const questionNumber = currentQuestionIndex + 1;

  // $('#questionText').html(`${question}`);

  // // Clear existing options
  // $('.radio-container').empty();

  // // Iterate over options and create radio buttons
  // options.forEach((option, index) => {
  //     const optionLabel = $("<label>").text(option.Answer_Description);
  //     const optionInput = $("<input>").attr({
  //         type: "radio",
  //         name: "group",
  //         value: `${index + 1}`
  //     });

  //     optionLabel.prepend(optionInput);
  //     $('.radio-container').append(optionLabel);
  // });









let isGamePaused = false;

function pauseGame() {
  isGamePaused = true;
  clearInterval(generaterocks);
  clearInterval(moverocks);
}

function resumeGame() {
  isGamePaused = false;
  generaterocks = setInterval(generateRocks, 1000);
  moverocks = setInterval(moveRocks,100);
}



var jet = document.getElementById("jet");
var board = document.getElementById("board");

window.addEventListener("keydown", (e) => {
  var left = parseInt(window.getComputedStyle(jet).getPropertyValue("left"));
  if (e.key == "ArrowLeft" && left > 0) {
    jet.style.left = left - 10 + "px";
  }
  //460  =>  board width - jet width
  else if (e.key == "ArrowRight" && left <= 1500) {
    jet.style.left = left + 10 + "px";
  }

  if (e.key == "ArrowUp" || e.keyCode == 32) {
    //32 is for space key
    var bullet = document.createElement("div");
    bullet.classList.add("bullets");
    board.appendChild(bullet);

    var movebullet = setInterval(() => {
      var rocks = document.getElementsByClassName("rocks");

      for (var i = 0; i < rocks.length; i++) {
        var rock = rocks[i];
        if (rock != undefined) {
          var rockbound = rock.getBoundingClientRect();
          var bulletbound = bullet.getBoundingClientRect();

          //Condition to check whether the rock/alien and the bullet are at the same position..!
          //If so,then we have to destroy that rock

          if (
            bulletbound.left >= rockbound.left &&
            bulletbound.right <= rockbound.right &&
            bulletbound.top <= rockbound.top &&
            bulletbound.bottom <= rockbound.bottom
          ) {
            rock.parentElement.removeChild(rock); //Just removing that particular rock;
            // alert("madhu")
            displayQuestion();
            console.log("1",1) 

            
          }
        }
      }
      var bulletbottom = parseInt(
        window.getComputedStyle(bullet).getPropertyValue("bottom")
      );

      //Stops the bullet from moving outside the gamebox
      if (bulletbottom >= 1000) {
        clearInterval(movebullet);
      }

      bullet.style.left = left + "px"; //bullet should always be placed at the top of my jet..!
      bullet.style.bottom = bulletbottom + 3 + "px";
    });
  }
});



// var generaterocks = setInterval(generateRocks, 1000);
// var moverocks = setInterval(moveRocks, 1000);

// function generateRocks() {
//   if (!isGamePaused) {
//     var rock = document.createElement("div");
//     rock.classList.add("rocks");
//     rock.style.left = Math.floor(Math.random() * 2000) + "px";
//     board.appendChild(rock);
//   }
// }


// function moveRocks() {
//   if (!isGamePaused) {
//     var rocks = document.getElementsByClassName("rocks");

//     if (rocks != undefined) {
//       for (var i = 0; i < rocks.length; i++) {
//         var rock = rocks[i];
//         var rocktop = parseInt(
//           window.getComputedStyle(rock).getPropertyValue("top")
//         );
        

//         rock.style.top = rocktop + 5 + "px"; // Adjust the value as needed
//       }
//     }
//   }
// }



// var generaterocks = setInterval(generateRocks, 1000);
// var moverocks = setInterval(moveRocks, 1000);

// function generateRocks() {
//   if (!isGamePaused) {
//     // Introduce a random condition to decrease the quantity of rocks
//     if (Math.random() < 0.3) {
//       var rock = document.createElement("div");
//       rock.classList.add("rocks");
//       rock.style.left = Math.floor(Math.random() * 2000) + "px";
//       board.appendChild(rock);
//     }
//   }
// }

// function moveRocks() {
//   if (!isGamePaused) {
//     var rocks = document.getElementsByClassName("rocks");

//     if (rocks != undefined) {
//       for (var i = 0; i < rocks.length; i++) {
//         var rock = rocks[i];
//         var rocktop = parseInt(
//           window.getComputedStyle(rock).getPropertyValue("top")
//         );

//         rock.style.top = rocktop + 50 + "px"; // Adjust the value as needed
//       }
//     }
//   }
// }




var generaterocks = setInterval(generateRocks, 1000);
var moverocks = setInterval(moveRocks, 100);

function generateRocks() {
  if (!isGamePaused) {
    // Introduce a random condition to decrease the quantity of rocks
    if (Math.random() < 0.5) {
      var rock = document.createElement("div");
      rock.classList.add("rocks");
      rock.style.left = "0"; // Start rocks from the left side
      board.appendChild(rock);
    }
  }
}

function moveRocks() {
  if (!isGamePaused) {
    var rocks = document.getElementsByClassName("rocks");

    if (rocks != undefined) {
      for (var i = 0; i < rocks.length; i++) {
        var rock = rocks[i];
        var rockleft = parseInt(
          window.getComputedStyle(rock).getPropertyValue("left")
        );

        rock.style.left = rockleft + 40 + "px"; // Adjust the value as needed
      }
    }
  }
}





// ... (Your existing code)

// Touch events for left and right movement
var touchStartX = 0;

window.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

window.addEventListener("touchend", (e) => {
  var touchEndX = e.changedTouches[0].clientX;
  var left = parseInt(window.getComputedStyle(jet).getPropertyValue("left"));

  if (touchEndX < touchStartX && left > 0) {
    jet.style.left = left - 10 + "px"; // Move left
  } else if (touchEndX > touchStartX && left <= 1500) {
    jet.style.left = left + 10 + "px"; // Move right
  }
});

// Touch event for shooting bullets when the jet is touched
jet.addEventListener("touchstart", (e) => {
  e.preventDefault(); // Prevent default behavior like scrolling
  shootBullet();
});

function shootBullet() {
  var left = parseInt(window.getComputedStyle(jet).getPropertyValue("left"));
  var bullet = document.createElement("div");
  bullet.classList.add("bullets");
  board.appendChild(bullet);

  var moveBullet = setInterval(() => {
    // ... (Your existing bullet movement code)

    var bulletBottom = parseInt(
      window.getComputedStyle(bullet).getPropertyValue("bottom")
    );

    if (bulletBottom >= 1000) {
      clearInterval(moveBullet);
    }

    bullet.style.left = left + "px";
    bullet.style.bottom = bulletBottom + 3 + "px";
  });
}

// ... (Your existing code)







