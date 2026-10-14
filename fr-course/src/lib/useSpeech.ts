"use client";

import { useSyncExternalStore } from "react";

// Pronunciación con la voz que trae el navegador o el sistema: no hay audios
// propios ni servidor de voz. Sin una voz rusa instalada no se ofrece nada,
// porque una voz de otro idioma leería el cirílico mal.

const supported = () => typeof window !== "undefined" && "speechSynthesis" in window;

// La lista de voces llega tarde en algunos navegadores; se avisa al cambiar.
function subscribe(onChange: () => void) {
  if (!supported()) return () => undefined;
  speechSynthesis.addEventListener("voiceschanged", onChange);
  return () => speechSynthesis.removeEventListener("voiceschanged", onChange);
}

function russianVoice() {
  if (!supported()) return undefined;
  const voices = speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith("ru"));
  // Las voces locales responden al instante y funcionan sin conexión.
  return voices.find((v) => v.localService) ?? voices[0];
}

// Se guarda el identificador y no el objeto: getVoices() puede devolver objetos
// nuevos en cada llamada y React necesita un valor estable entre lecturas.
const russianVoiceId = () => russianVoice()?.voiceURI ?? null;

// Devuelve la función para pronunciar en ruso, o null si no hay voz rusa.
export function useRussianSpeech() {
  const voiceId = useSyncExternalStore(subscribe, russianVoiceId, () => null);
  if (!voiceId) return null;

  return (text: string) => {
    const voice = russianVoice();
    if (!voice) return;
    speechSynthesis.cancel();
    // Sin las marcas de acento: algunas voces las leen como un sonido aparte.
    const spoken = text.normalize("NFD").replace(/\u0301/g, "").normalize("NFC");
    const utterance = new SpeechSynthesisUtterance(spoken);
    utterance.voice = voice;
    utterance.lang = voice.lang;
    utterance.rate = 0.85;
    speechSynthesis.speak(utterance);
  };
}
