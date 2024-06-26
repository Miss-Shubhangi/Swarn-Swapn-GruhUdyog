


    let reviewListName = [];
    let reviewListMsg = [];

    const reviewBox = document.getElementById("reviewContainer");

    const reviewNameItemsLS = localStorage.getItem("reviewListName");
    const reviewMsgItemsLS = localStorage.getItem("reviewListMsg");

    if (reviewNameItemsLS) {
        reviewListName = JSON.parse(reviewNameItemsLS);
        reviewListMsg = JSON.parse(reviewMsgItemsLS);
        loadList();
    }

    function addReview() {
        const inputName = document.getElementById("input-Name");
        const name = inputName.value;
        const inputMsg = document.getElementById("input-Msg");
        const msg = inputMsg.value;

        if (name) {
            reviewListName.push(name);
            reviewListMsg.push(msg);

            localStorage.setItem("reviewListName", JSON.stringify(reviewListName));
            localStorage.setItem("reviewListMsg", JSON.stringify(reviewListMsg));

            inputName.value = "";
            inputMsg.value = "";
            loadList();
        } else {
            alert("Please enter name");
        }
    }

    function loadList() {
        reviewBox.innerHTML = "";

        for (let i = 0; i < reviewListName.length; i++) {
            let name = reviewListName[i];
            let msg = reviewListMsg[i];
            reviewBox.innerHTML = reviewBox.innerHTML + `
                <div class="card p-3 col-md-3 col-xs-12 col-sm-4 m-4  display-review">
                <h4 class="text-center mt-3 ">${name}</h4>
                <p class="mt-1 m-2 text-center flex-row ">${msg}</p>      
            </div>`;
        }
    }

    function cancelReview() {
        const inputName = document.getElementById("input-Name");
        let name = inputName.value;
        const inputMsg = document.getElementById("input-Msg");
        let msg = inputMsg.value;

        inputName.value = "";
        inputMsg.value = "";
    }


 /* let reviewListName = [];
let reviewListMsg = [];

const reviewBox = document.getElementById("reviewContainer");

const reviewNameItemsLS = localStorage.getItem("reviewListName");
const reviewMsgItemsLS = localStorage.getItem("reviewListMsg");

if(reviewNameItemsLS){
    reviewListName = JSON.parse(reviewNameItemsLS);
    reviewListMsg = JSON.parse(reviewMsgItemsLS);
    loadList();
}

function addReview(){
    const inputName = document.getElementById("input-Name");
    const name = inputName.value;
    const inputMsg = document.getElementById("input-Msg");
    const msg = inputMsg.value;

    if (name) {
        reviewListName.push(name);
        reviewListMsg.push(msg);

        localStorage.setItem("reviewListName", JSON.stringify(reviewListName));
        localStorage.setItem("reviewListMsg", JSON.stringify(reviewListMsg));

        inputName.value = "";
        inputMsg.value = "";
        loadList();
    }
    else {
        alert("Please enter name");
    }
}

function loadList() {
    reviewBox.innerHTML = "";

    for (let i = 0; i < reviewListName.length; i++) {
        let name = reviewListName[i];
        let msg = reviewListMsg[i];
        reviewBox.innerHTML = reviewBox.innerHTML + `
            <div class="card p-3 col-md-3 col-xs-12 col-sm-4 m-4  display-review">
            <h4 class="text-center mt-3 ">${name}</h4>
             <p class="mt-1 m-2 text-center flex-row ">${msg}</p>      
        </div>`;
    }
}

function cancelReview(){
    const inputName = document.getElementById("input-Name");
    let name = inputName.value;
    const inputMsg = document.getElementById("input-Msg");
    let msg = inputMsg.value;

    inputName.value = "";
    inputMsg.value = "";
}*/
