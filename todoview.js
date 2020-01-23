function ToDoView () {

   function render (tasksArr) {

      document.getElementById('savedTasks').innerHTML = "";
    
      output = Mustache.render( 
         "{{#tasksArr}}" + 
            "<p id='{{idx}}' data-pid='{{idx}}' {{#state}}style='text-decoration: line-through;'{{/state}}>" + 
               "{{title}}" + 
               "<input type='button' class='deleteTaskBtn' value='-' title='Remove' data-dbid='{{idx}}'/>" + 
               "{{^state}}<input type='checkbox' value='-' title='Check' data-cbid='{{idx}}' class='deleteTaskCB'/>{{/state}}" + 
            "</p>" + "<hr>" +
         "{{/tasksArr}}",
         { tasksArr });
    
         document.getElementById('savedTasks').innerHTML += output;
         
      }

      return {
         render
      };
}


