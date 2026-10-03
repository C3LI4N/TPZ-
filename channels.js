// ============================================================
//  TPZ+ — Chaînes TV (FR uniquement)
// ============================================================

window.TPZ_CHANNELS = [];
window.TPZ_CHANNELS_LOADING = false;
window.TPZ_CHANNELS_LOADED = false;

async function loadChannels() {
    if (window.TPZ_CHANNELS_LOADING || window.TPZ_CHANNELS_LOADED) {
        return window.TPZ_CHANNELS;
    }
    window.TPZ_CHANNELS_LOADING = true;

    try {
        const res = await fetch('https://api.cdnlivetv.is/api/v1/channels/?user=cdnlivetv&plan=free');
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = await res.json();

        window.TPZ_CHANNELS = (data.channels || [])
            .filter(ch => ch.code === 'fr')
            .map(ch => ({
                name: ch.name,
                url: ch.url,
                image: ch.image,
                status: ch.status,
                viewers: ch.viewers || 0
            }));

        window.TPZ_CHANNELS.sort((a, b) => a.name.localeCompare(b.name, 'fr'));

        window.TPZ_CHANNELS_LOADED = true;
        window.TPZ_CHANNELS_LOADING = false;
        console.log(`📺 ${window.TPZ_CHANNELS.length} chaînes FR chargées`);
        return window.TPZ_CHANNELS;
    } catch (err) {
        console.error('❌ Erreur chaînes :', err);
        window.TPZ_CHANNELS = [];
        window.TPZ_CHANNELS_LOADING = false;
        return [];
    }
}