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
        window.location.href = '/forfait-droit-criminel';
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


});
