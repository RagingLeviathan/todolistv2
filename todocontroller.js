    var TaskController = function (model, view) {

        var idx = 0;

        model.setOnChange(function () {
            view.render(model.getList());
            bindEvents();
        });

        function onTaskSubmit() {
            var unhideDiv = document.getElementById('savedTasks');

            var tb = document.getElementById('taskBox');

            title = tb.value;

            var task = {
                title,
                state:false,
                idx
            }

            var check = model.checkRow(title);

            if (!tb.value.length == 0) {
                if (unhideDiv.className == 'hidden'); {
                    unhideDiv.className = 'unhidden';
                }

                if (!check) {
                    model.addToList(task);
                }
                else {
                    alert("Warning! To-do task already exists in list!!!");
                }
            }
            else {
                alert("Warning! Blank task entered! Please input valid task!!!");
            }

            tb.value = '';
            
            return false;
        }

        document.getElementsByClassName('deleteTaskBtn').onclick = function onTaskRemove(event) {
            removeFromList(event.target.dataset.dbid);
        }

        function bindEvents() {
            document.getElementById('toDoForm').onsubmit = onTaskSubmit;

            var btn = document.getElementsByClassName('deleteTaskBtn');

            var onDeleteButtonClicked = function (events) {
                var pressedButton = events.target;
                console.log(pressedButton.dataset.dbid);
                model.removeFromList(pressedButton.dataset.dbid);
            };

            for (var i in btn) {
                btn[i].onclick = onDeleteButtonClicked;
            }
            
            var onCheckboxTicked = function (event) {
                model.setChecked(event.target.dataset.cbid);
            };
    
            var cbx = document.getElementsByClassName('deleteTaskCB');
            for (var i in cbx) {
                cbx[i].onchange = onCheckboxTicked;
            }

        };

        return {
            bindEvents
        }

    }