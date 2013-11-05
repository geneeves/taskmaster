var Task = {
  taskDescription: function(description) {
    this.description = description;
  },

  // acceptable but not great:
  // setStatus: function(newStatus) {
  //   this.status = newStatus;
  // },

  // bad:
  // setComplete: function(complete) {
    // this.complete = complete;
  // }

  setComplete: function() {
    this.complete = true;
  }
  // setIncomplete: function() {
  //   this.complete = false;
  // }
};

var List = {
  createList: function() {
    this.tasks = [];
  },

  addTask: function(task) {
    this.tasks.push(task);
  },

  nameList: function(name) {
    this.name = name;
  }

  // removeList: function() {
  //   this.tasks = [];
  //   this.name = "";
  // }
};

$(function() {
  var currentList;

  //adds uncompleted and completed tasks to currentList
  function populateList(currentList) {
      currentList.tasks.forEach(function(task) {
        if (!task.complete) {
          $("#task-list").append("<span class='clickable-task'><li id='single-task'>" + task.description + "</li></span>");
          $("#task-list .clickable-task").last().click(function() {
            task.setComplete();
            $(this).remove();
            $("ul#completed-tasks").append("<span class='clickable-task'><li id='single-task'>" + task.description + "</li></span>");
            $(".completed-task-field").show();
            console.log(task.description)
          }); 
        } else {
          $("ul#completed-tasks").append("<span class='clickable-task'><li id='single-task'>" + task.description + "</li></span>");
          $(".completed-task-field").show();
        }
      });      
    }

  //add a list name
  $("form#list").submit(function() {
    var taskList = Object.create(List);
    taskList.createList();
    
    var listID = $("input#new-list").val();
    taskList.nameList(listID);

    currentList = taskList;

    $("ol#task-list").empty();
    $("ul#list-binder").append("<li class='list-names'><span class='clickable'>" + taskList.name + "</span></li>");
    $(".current-list-name").empty().append(currentList.name);
    $("completed-tasks").empty();
    $("input#new-list").val("");

    //click the list name
    $("li.list-names").last().click(function() {
      currentList = taskList;
      $(".completed-task-field").hide();
      $("#task-list").empty();
      $("#completed-tasks").empty();
      $(".current-list-name").empty().append(currentList.name);
      populateList(currentList);
    });


    // // le clear list prompt
    // $(".current-list-name").last().click(function() {
    //   currentList = taskList;

    //   var deleteAnswer = confirm("Would you like to delete this list?");
    //   if (deleteAnswer) {
    //     removeList(currentList);
    //     return false;
    //   }
    // });

    $(".enter-tasks").show();
    return false;
  });

  //add a new task
  $("form#task").submit(function() {
    var currentTask = $("input#tasks").val();
    var newTask = Object.create(Task);
    newTask.taskDescription(currentTask);
  
  //set a task as complete and move it to the completed task field
    $("#task-list").append("<li class='clickable-task'>" + newTask.description + "</li>");
      currentList.addTask(newTask);
    $("#task-list .clickable-task").last().click(function() {
      newTask.setComplete();
      $(this).remove();
      $("ul#completed-tasks").append("<span class='clickable-task'><li id='single-task'>" + newTask.description + "</li></span>");
      $(".completed-task-field").show();
    });   

    $("input#tasks").val("");
    return false;
  });
});


// notes for next steps:
//set tasks as incomplete so that you can prioritize etc




