import $ from 'jquery';
import _ from 'lodash';
import io from 'socket.io-client';
import moment from 'moment';
import Question from './Question';
import QUESTIONS from './QUESTIONS';
import './style.sass';

var socket = io();
var clearInput = function() {
  $("input:checked").prop("checked", false)
  $(".text_question input").val("");
}

var check_and_disable_cancelconfirm = () => {
  var nonemptyText = $('.text_question input[type="text"]').filter(function () {
    return this.value.length > 0
  }).length;
  var nonemptyCheckboxes = $(".checkboxes_question").has("input:checked").length;
  var nonemptyLikert = $(".likert_question input:checked").length;
  var nonemptyMultiple = $(".multiple_choice_question input:checked").length;

// if ((nonemptyText + nonemptyLikert + nonemptyCheckboxes + nonemptyMultiple) == $(".question").length) {
//     $("button#confirm").removeAttr("disabled");
//   } else {
//     $("button#confirm").attr("disabled", "disabled");
//   }

// if ($(".question").length) {
//     $("button#cancel").removeAttr("disabled");
//   } else {
//     $("button#cancel").attr("disabled", "disabled");
//   }


}


$(function() {
  var allQuestions = QUESTIONS.map(q => new Question(q));
  _.each(allQuestions, function(q) {
    $("#questions").append(q.getHtml());
  })

  // FOR DEBUGGING
  $("#question_name input").val("Your Name");
  $("#question_twitter_handle input").val("foo");
  $("input").prop("checked", "checked");
  check_and_disable_cancelconfirm();
//

  $("input").change((event) => {
    check_and_disable_cancelconfirm();
  });

  // 'cancel' button
  $("button#cancel").click((event) => {
    clearInput();
  });


  // confirm button
  $("button#confirm").click((event) => {

    var allResults = Question.mergeResults(_.map(allQuestions, function(q) {
      return q.getResult();
    }));

    console.log(allResults);

    var data = {};
    data.sender = "quiz";
    data.time = {'mode': 'quiz', 'value': moment().format() };
    data.quizResults = allResults;

    // send data
    socket.emit('broadcast', data);

    $("#twitterprofile").attr("src", "https://twitter.com/" + allResults.twitter_handle + "/profile_image?size=original");
    $("#personname").html(allResults.name);
    $("#thankyou").fadeIn(1000);

  });

  $("button#thankyoumessage").click(function() {
    clearInput();
    check_and_disable_cancelconfirm();
    $("#thankyou").fadeOut(1000);
  })
});
