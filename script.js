<script>
function aprobar(id) {
  localStorage.setItem(id, "aprobado");
  desbloquear();
}

function desbloquear() {
  if (localStorage.getItem("mate2")) {
    const c = document.getElementById("mate2");
    c.classList.remove("bloqueado");
    c.querySelector("button").disabled = false;
  }
}

desbloquear();
</script>
