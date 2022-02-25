const secretBtn = document.querySelector("#srcret_journal_btn");

function processFile(file) {
    const reader = new FileReader();
    reader.readAsText(file,"utf-8");
    reader.onload = function() {

        document.querySelector("#secret_journal_box").style.display = "block";
        document.querySelector("#secret_journal_contents").innerText = reader.result;
    }

}


secretBtn.onclick = () => {
     console.log("hi");
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "text/plain";
    input.onchange = function(event) {
        processFile(event.target.files[0]);
    }
    input.click();
};