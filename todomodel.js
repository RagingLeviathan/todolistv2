
var TaskRepository = function () {
    var taskList = [];
    var onChange;

    function getList() {
        return taskList;
    } 

    function getIndex(id) {
        for (var i in taskList) {
            if (taskList[i].idx == id)
                return i;
        }
    }

    function checkRow(task) {
        for (var i in taskList) {
            if (taskList[i].title === task)
                return true;
        }
    }

    function addToList (task) {
        task.idx = uuidv4();
        taskList.push(task);
        if (typeof onChange === "function" ) {
            onChange();
        } 
    }

    function removeFromList (id) {
       var test = getIndex(id);
       console.log("test: ");
       console.log(test);
       taskList.splice(test,1);
        if (typeof onChange === "function" ) {
            onChange();
        }
    }

    function setOnChange(onChangeCallback) {
        onChange = onChangeCallback;
    }

    function setChecked(id) {
        var test = getIndex(id);
        taskList[test]["state"] = true;
        if (typeof onChange === "function" ) {
            onChange();
        } 
    } 

    return {
        getList,
        addToList,
        removeFromList,
        setOnChange,
        setChecked,
        checkRow
    };
}