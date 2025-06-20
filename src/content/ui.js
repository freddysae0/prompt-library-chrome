export function highlightPromptFields(fields) {
    fields.forEach(el => {
        el.classList.add('prompt-field');
    });
}

export function renderSuggestions(el, prompts) {
    const list = document.createElement('ul');
    list.className = 'prompt-suggestions';

    prompts.forEach(text => {
        const li = document.createElement('li');
        li.textContent = text;
        li.addEventListener('click', () => {
            el.textContent = text;
        });
        list.appendChild(li);
    });

    el.parentElement.appendChild(list);
}
