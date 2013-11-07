describe("Task", function() {
  it("creates a task description", function() {
    var task = Object.create(Task);
    task.taskDescription("get some sleep");
    task.description.should.equal("get some sleep");
  });

  describe("setComplete", function() {
    it("sets a task as complete", function() {
      var task = Object.create(Task);
      task.setComplete();
      task.complete.should.equal(true);
    });
  });
});

describe("List", function() {
  it("starts with an empty list", function() {
    var list = Object.create(List);
    list.createList();
    list.tasks.should.eql([]);
  });

  describe("addTask", function() {
    it("adds a task to a list", function() {
      var list = Object.create(List);
      list.createList();
      list.addTask("get some sleep");
      list.tasks.should.eql(["get some sleep"]);
    });
  });

  describe("nameList", function() {
    it("names the list", function() {
      var list = Object.create(List);
      list.nameList("Books To Read");
      list.name.should.equal("Books To Read");
    });
  });
});
