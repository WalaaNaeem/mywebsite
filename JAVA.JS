//document.writeln('hello');// للطباعة
//window.alert('hello');تظهر popup
//window.print();تظهرنافذةطباعة
//document.writeln(typeof "hi")typeof بتبين نوع المتغير اللي بعدها
//class& id الفرق بينهم من هاد الفيديو تذكري https://www.youtube.com/watch?v=GRaoxazCOX0&list=PLknwEmKsW8OuTqUDaFRBiAViDZ5uI3VcE&index=48
//let title=document.titleهون استدعيت العنوان و غيرت اسمو
//title="مهمات"
//console.log( title)
//let place=document.getElementById('taskInput')كيف اجيب الاتريبيوت و اعدل عليه و اشوف شو داخل الاتربيوت القيمة اللي بداخلها
//console.log (taskInput.placeholder)
//let place=document.getElementById('taskInput')
//console.log (taskInput.setAttribute ('placeholder','اكتب هنا'))  HTMLلأي عنصر في (Attribute)تسمح لك تضيف أو تعدّل خاصية setAttribute
const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', function() {
  const taskText = taskInput.value.trim();
  
  if (taskText !== "") {
    const li = document.createElement('li');
    li.textContent = taskText;

    // لما تضغط على المهمة، تتحول لمكتملة
    li.addEventListener('click', function() {
      li.classList.toggle('completed');
    });

    taskList.appendChild(li);
    taskInput.value = ""; // يمسح النص بعد الإضافة
  } else {
    alert("رجاءً اكتب مهمة قبل الإضافة.");
  }
});
