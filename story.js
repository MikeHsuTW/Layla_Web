const recording = { src: "./media/0522.m4a", transcript: "" };

if (recording.src) {
  const player = document.getElementById("voice-recording");
  player.src = recording.src;
  player.hidden = false;
  document.getElementById("voice-placeholder").hidden = true;
  if (recording.transcript) {
    const transcript = document.getElementById("transcript");
    transcript.querySelector("p").textContent = recording.transcript;
    transcript.hidden = false;
  }
}
