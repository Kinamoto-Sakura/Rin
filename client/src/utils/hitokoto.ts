let loading = false;
let cachedHitokoto: string | null = null;

export async function fetchHitokoto() {
    if (loading) return;
    loading = true;
    if (cachedHitokoto !== null) {
        updateHitokotoElements(cachedHitokoto);
        loading = false;
        return;
    }
    const response = await fetch('https://v1.hitokoto.cn/?encode=text');
    const hitokotoText = await response.text();
    cachedHitokoto = hitokotoText;
    updateHitokotoElements(hitokotoText);
    loading = false;
}

function updateHitokotoElements(hitokotoText: string) {
    const hitokotos = document.querySelectorAll('[id="hitokoto_text"]');
    hitokotos.forEach(hitokoto => {
        hitokoto.innerHTML = hitokotoText;
    });
}
