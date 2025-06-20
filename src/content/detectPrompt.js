export function isPromptLikeEditableDiv(el) {
    const contentEditable = el.getAttribute("contenteditable") === "true";
    const roleTextbox = el.getAttribute("role") === "textbox";
    const ariaLabel = el.getAttribute("aria-label")?.toLowerCase() || "";
    const placeholder = el.getAttribute("data-placeholder")?.toLowerCase() || "";
    const className = el.className?.toLowerCase() || "";

    return (
        contentEditable &&
        (ariaLabel.includes("pregunta") ||
            placeholder.includes("pregunta") ||
            className.includes("prompt") ||
            className.includes("editor") ||
            className.includes("ql-editor") ||
            className.includes("prosemirror") ||
            roleTextbox)
    );
}
