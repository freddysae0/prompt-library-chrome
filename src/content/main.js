import { isPromptLikeEditableDiv } from './detectPrompt.js';
import { fetchPrompts } from '../api/prompts.js';
import { highlightPromptFields, renderSuggestions } from './ui.js';

async function processFields() {
    const prompts = await fetchPrompts();
    const fields = Array.from(document.querySelectorAll('div[contenteditable="true"]'))
        .filter(isPromptLikeEditableDiv);

    highlightPromptFields(fields);
    fields.forEach(el => renderSuggestions(el, prompts));
}

processFields();
setInterval(processFields, 2000);
