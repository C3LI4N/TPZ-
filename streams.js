// ============================================================
//  TPZ+ — Configuration des flux
//  Ajoute / modifie tes matchs ici. Aucun autre fichier à toucher.
// ============================================================

window.TPZ_STREAMS = [
    {
        id: "bahrein-hong kong",
        nom: "BAHREIN 🆚 HONG KONG",
        sport: "⚽ Football",
        competition: "Asian Games",
        image: "",
        heureDebut: "2026-09-26T11:00:00+02:00",
        priorite: 1,
        visible: true,
        forceLive: true,
        langues: [
            { code: "FR", label: "Français", url: "https://nadia67bc.mp77g69ainei3gx2voxygen.ru/fr/handball/asian-games-2232218/bahrain-vs-hong-kong.html?icg=RlI&ilang=fr" }
        ]
    },
    {
        id: "real-barca",
        nom: "Real 🆚 Barça",
        sport: "⚽ Football",
        competition: "Liga",
        image: "",
        heureDebut: "2026-09-27T22:00:00+02:00",
        priorite: 2,
        visible: true,
        forceLive: false,
        langues: [
            { code: "FR", label: "Français", url: "https://ton-lien-stream2.m3u8" }
        ]
    },
    {
        id: "lakers-celtics",
        nom: "Lakers 🆚 Celtics",
        sport: "🏀 Basket",
        competition: "NBA",
        image: "",
        heureDebut: "2026-09-28T02:00:00+02:00",
        priorite: 3,
        visible: true,
        forceLive: false,
        langues: [
            { code: "FR", label: "Français", url: "https://ton-lien-stream3.m3u8" }
        ]
    }
];

// ── Réglages généraux ──
window.TPZ_CONFIG = {
    viewersRefresh: 60000
};