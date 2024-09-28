window.onload = loaded;

/**
 * Simple Function that will be run when the browser is finished loading.
 */
function loaded() {
    document.getElementById("greet_btn").onclick = function() {
        greet();
    }
}

function greet() {
    let greeting = document.querySelector('input[name="greeting"]:checked').value;
    alert(greeting);
}
