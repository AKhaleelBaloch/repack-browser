function copyText(id)
{
    const text = document.getElementById(id).innerText;

    navigator.clipboard.writeText(text);

    showToast("✔ Address copied to clipboard");
}

function showToast(message)
{
    const toast = document.getElementById("toast");

    toast.innerHTML = message;

    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(function(){

        toast.classList.remove("show");

    },3000);
}