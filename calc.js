<script>
document.write(unescape('function%20myFunction%28%29%20%7B%0A%0Avar%20participants%20%3D%20document.getElementById%28%22n%22%29.value%3B%0Avar%20errors%20%3D%20document.getElementById%28%22e%22%29.value%3B%0A%0Aerrors%20%3D%20errors%20*%20errors%3B%0A%0Aerrors%20%3D%20participants%20*%20errors%3B%0A%0Aerrors%20%3D%20errors%20+%201%3B%0A%0Aparticipants%20%3D%20participants%20/%20errors%3B%0A%0Aparticipants%20%3D%20%20Math.round%28participants%29%3B%0A%0Adocument.getElementById%28%22result%22%29.innerHTML%20%3D%20%22Result%3A%20%22%20+%20participants%3B%20%0A%0A%7D%0A'))
</script>

