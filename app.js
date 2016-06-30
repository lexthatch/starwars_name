(function() {
  
  var people = [];
  var tbody = $('tbody');
  
  $('#loadBtn').on('click', function () {
    
        
    getData('http://swapi.co/api/people/', showPeople);
    
  });
  
  
  function getData(url, callback) {
    
    $.get(url, function (data, status) {
      
      for (var i = 0; i < data.results.length; i++) {
        people.push(data.results[i]);
      }
      
      if(data.next) {
        getData(data.next, callback);
      }
      else {
      callback();
    }
    
    });
    
  }
  
  function showPeople() {
    
    for (var i = 0; i < people.length; i++) {
      var item = people[i];
      
      var row = '<tr>';
      row += '<td> ' + (i + 1) + '<td>';
      row += '<td> ' + item.name + '</td>';
      row += '</tr>';
    
    tbody.append($(row));
    
    }
    
  }
  
})();
    
    
    