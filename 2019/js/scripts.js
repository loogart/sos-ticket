
$(document).ready(function() {
    // all custom jQuery will go here



    let redirectByPoints = function(val)
    {
      switch(val)
      {
        case '1-3':
          window.location.href = '/forfait-1-3-points';
          return;
        break;
        case '4-5':
          window.location.href = '/forfait-4-5-points';
          return;
        break;
        case '6 +':
          window.location.href = '/forfait-6-points-et-plus';
          return;
        break;
        default:
          return;
      }
    }

    let submitSpeedingForm = function()
    {
      let data = $('#speeding-form').serializeArray().reduce(function(obj, item) {
        obj[item.name] = item.value;
        return obj;
      }, {});

      if(data['speedingFormExcessSpeeding']==='true')
      {
        window.location.href = '/forfait-gev';
        return;
      }

      redirectByPoints(data['speedingFormPoints']);

    }

    let submitOtherInfractionForm = function()
    {
      let data = $('#other-infraction-form').serializeArray().reduce(function(obj, item) {
        obj[item.name] = item.value;
        return obj;
      }, {});

      if(data['otherInfractionFormDrugs']==='true')
      {
        window.location.href = '/forfait-facultes-affaiblies';
        return;
      }

      redirectByPoints(data['otherInfractionFormPoints']);
    }



    $('#btn-submit-speeding-form').click(function(){
      submitSpeedingForm();
    });

    $('#btn-submit-other-infraction-form').click(function(){
      submitOtherInfractionForm();
    });


var vitesse1 = $('#vitesse1');
var vitesse2 = $('#vitesse2');
var vitesse3 = $('#vitesse3');
var vitesseNon = $('#vitesseNon');
var vitesseOui = $('#vitesseOui');
var nextButton = $('#next1');

var autre1 = $('#autre1');
var autre2 = $('#autre2');
var autre3 = $('#autre3');
var autreNon = $('#autreNon');
var autreOui = $('#autreOui');
var nextButton2 = $('#next2');

$("input[type=radio]").change(function () {
    //modal 1
    if ((vitesse1.is(':checked')) && (vitesseNon.is(':checked'))) {
        nextButton.attr("href", "./forfait-1-3-points.html");
    } else if ((vitesse2.is(':checked')) && (vitesseNon.is(':checked'))) {
        nextButton.attr("href", "./forfait-4-5-points.html");
    } else if ((vitesse3.is(':checked')) && (vitesseNon.is(':checked'))) {
        nextButton.attr("href", "./forfait-6-points-et-plus.html");
    } else if ((vitesse1.is(':checked')) && (vitesseOui.is(':checked'))) {
        nextButton.attr("href", "./forfait-gev.html");
    } else if ((vitesse2.is(':checked')) && (vitesseOui.is(':checked'))) {
        nextButton.attr("href", "./forfait-gev.html");
    } else if ((vitesse3.is(':checked')) && (vitesseOui.is(':checked'))) {
        nextButton.attr("href", "./forfait-gev.html");
        //modal 2
    } else if ((autre1.is(':checked')) && (autreNon.is(':checked'))) {
        nextButton2.attr("href", "./forfait-1-3-points.html");
    } else if ((autre2.is(':checked')) && (autreNon.is(':checked'))) {
        nextButton2.attr("href", "./forfait-4-5-points.html");
    } else if ((autre3.is(':checked')) && (autreNon.is(':checked'))) {
        nextButton2.attr("href", "./forfait-6-points-et-plus.html");
    } else if ((autre1.is(':checked')) && (autreOui.is(':checked'))) {
        nextButton2.attr("href", "./forfait-facultes-affaiblies.html");
    } else if ((autre2.is(':checked')) && (autreOui.is(':checked'))) {
        nextButton2.attr("href", "./forfait-facultes-affaiblies.html");
    } else if ((autre3.is(':checked')) && (autreOui.is(':checked'))) {
        nextButton2.attr("href", "./forfait-facultes-affaiblies.html");
    }
});

});
